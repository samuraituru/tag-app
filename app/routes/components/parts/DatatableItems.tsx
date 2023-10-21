
import {
  Card,
  DataTable,
  Badge,
  Spinner,
  Button,
  Icon,
} from '@shopify/polaris';
import {
  DynamicSourceMajor
} from '@shopify/polaris-icons';

export default function DatatableItems() {

  const testAction = () => {console.log('Action')};

  const rows = [

    ['アップロード', '2023-08-15 15:42:00', '2023-08-15 15:46:57', 235, 20, <Badge status="success">Success</Badge>],
  //  ['更新', '2023-08-15 15:42:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, 235, 20, ''],
    ['リクエスト', '2023-08-15 15:00:00', '2023-08-15 15:07:32', 235, '', <Button size="micro" primary onClick={testAction}>データ取り込み</Button>],
  //  ['リクエスト', '2023-08-15 15:00:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, '', '', ''],



  //  ['アップロード', '2023-08-15 15:42:00', '2023-08-15 15:46:57', 235, 25, <Badge status="success">Success</Badge>],
  //  ['アップロード', '2023-08-15 15:42:00', <Spinner accessibilityLabel="Small spinner example" size="small" />, 235, 25, ''],
  //  ['リクエスト', '2023-08-15 15:00:00', '2023-08-15 15:07:32', 235, '', <Button size="micro" primary disabled onClick={testAction}>データ取り込み</Button>],
  ];

  return (
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            '処理',
            '実行日時',
            '完了日時',
            '商品数',
            '更新数',
            '',
          ]}
          rows={rows}
          verticalAlign='middle'
          increasedTableDensity
          // totals={['', '', '', 235, 0, <Button size="micro" primary disabled onClick={testAction}>更新</Button>]}
          totals={['', '', '', 235, 20, <Button size="micro" primary disabled onClick={testAction}>更新</Button>]}
          totalsName={{
            singular: <Icon source={DynamicSourceMajor} color="base" />,
            plural: <Icon source={DynamicSourceMajor} color="base" />,
          }}
        />
      </Card>
  );
}
