import {
  Page,
  Card,
  DataTable,
  Badge,
  Spinner,
  Button,
  Icon,
} from "@shopify/polaris";
import {
  RefreshMajor,
  ArrowDownMinor,
  DynamicSourceMajor,
} from "@shopify/polaris-icons";
import { useState, useEffect } from "react";

//import ActionHistory from '../cards/ActionHistory';

export default function ItemMgmtHome() {
  // リクエスト押下時のアクション
  const requestAction = () => {
    setRows((prevRows) => [
      ...prevRows,
      generateRow(
        "リクエスト",
        getCurrentDateTime(),
        <Spinner accessibilityLabel="Small spinner example" size="small" />,
        235,
        "",
        ""
      ),
    ]);
    // データベースにも追加の必要あり？？
    console.log("requestAction");
  };

  // 最上部の更新押下時のアクション
  const statusUpdate = () => {
    // ステータス状態をみて、ローディング解除か判定
    let updateRows = rows;
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      const status = row[5];
      // ステータスが空欄の場合は処理中なので、処理結果で更新
      if (status == "") {
        const act = row[0];
        if (act == "リクエスト") {
          // 処理状態確認APIを実行して、COMPLETEDならデータ取り込みに更新
          updateRows[i] = generateRow(
            row[0],
            row[1],
            getCurrentDateTime(),
            row[3],
            row[4],
            <Button size="micro" primary onClick={insertProducts}>
              データ取り込み
            </Button>
          );
        } else if (act == "アップロード") {
          // 処理完了ならSuccessに更新
          updateRows[i] = generateRow(
            row[0],
            row[1],
            getCurrentDateTime(),
            row[3],
            row[4],
            <Badge status="success">Success</Badge>
          );
        }
      }
    }
    // なぜか画面反映までに時間がかかる、、
    setRows((prevRows) => updateRows);
    console.log("statusUpdate");
  };

  // データ取り込み押下時のアクション（商品情報DB保存）
  const insertProducts = () => {
    console.log("insertProducts");
  };

  // ヘッダーの1つ下の更新押下時のアクション（タグ情報一括更新）
  const updateTags = () => {
    setRows((prevRows) => [
      ...prevRows,
      generateRow(
        "アップロード",
        getCurrentDateTime(),
        <Spinner accessibilityLabel="Small spinner example" size="small" />,
        235,
        "",
        ""
      ),
    ]);
    // データベースにも追加の必要あり？？
    // 更新ボタン非活性
    setTotal((prevRows) =>
      generateRow(
        prevRows[0],
        prevRows[1],
        prevRows[2],
        prevRows[3],
        prevRows[4],
        <Button size="micro" primary disabled onClick={updateTags}>
          更新
        </Button>
      )
    );
    console.log("updateTags");
  };

  // DataTableの行を生成
  const generateRow = (
    action,
    executionTime,
    completionTime,
    productCount,
    updateCount,
    button
  ) => {
    return [
      action,
      executionTime,
      completionTime,
      productCount,
      updateCount,
      button,
    ];
  };

  const [total, setTotal] = useState(
    generateRow(
      "",
      "",
      "",
      235,
      20,
      <Button size="micro" primary onClick={updateTags}>
        更新
      </Button>
    )
  );

  const [rows, setRows] = useState([
    generateRow(
      "アップロード",
      "2023-08-15 15:42:00",
      "2023-08-15 15:46:57",
      235,
      20,
      <Badge status="success">Success</Badge>
    ),
    generateRow(
      "リクエスト",
      "2023-08-15 15:00:00",
      "2023-08-15 15:07:32",
      235,
      "",
      <Button size="micro" primary onClick={insertProducts}>
        データ取り込み
      </Button>
    ),
    //['アップロード', '2023-08-15 15:42:00', '2023-08-15 15:46:57', 235, 20, <Badge status="success">Success</Badge>],
    //  ['更新', '2023-08-15 15:42:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, 235, 20, ''],
    //['リクエスト', '2023-08-15 15:00:00', '2023-08-15 15:07:32', 235, '', <Button size="micro" primary onClick={testAction}>データ取り込み</Button>],
    //  ['リクエスト', '2023-08-15 15:00:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, '', '', ''],

    //  ['アップロード', '2023-08-15 15:42:00', '2023-08-15 15:46:57', 235, 25, <Badge status="success">Success</Badge>],
    //  ['アップロード', '2023-08-15 15:42:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, 235, 25, ''],
    //  ['リクエスト', '2023-08-15 15:00:00', '2023-08-15 15:07:32', 235, '', <Button size="micro" primary disabled onClick={testAction}>データ取り込み</Button>],
  ]);

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <Page
      fullWidth
      title="操作履歴"
      primaryAction={{
        content: "リクエスト",
        onAction: requestAction,
      }}
      secondaryActions={[
        {
          content: "更新",
          disabled: false,
          icon: RefreshMajor,
          helpText: "You need permission to import products.",
          onAction: statusUpdate,
        },
      ]}
    >
      <Card>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text", "text"]}
          headings={["処理", "実行日時", "完了日時", "商品数", "更新数", ""]}
          rows={rows}
          verticalAlign="middle"
          increasedTableDensity
          // totals={['', '', '', 235, 0, <Button size="micro" primary disabled onClick={testAction}>更新</Button>]}
          totals={total}
          totalsName={{
            singular: <Icon source={DynamicSourceMajor} color="base" />,
            plural: <Icon source={DynamicSourceMajor} color="base" />,
          }}
        />
      </Card>
    </Page>
  );
}
