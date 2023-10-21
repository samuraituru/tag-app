import {
  Card,
  Text,
  List,
  Box,
  Button,
} from '@shopify/polaris';

import SfcMediaCard from '../parts/SfcMediaCard';

export default function DisplayCard() {

  const datas = [
    {
      title: "リクエスト実行",
      exp: "texttexttexttexttexttexttexttext",
    },
    {
      title: "商品情報取得・登録",
      exp: "texttexttexttexttexttexttexttext",
    },
    {
      title: "商品検索",
      exp: "texttexttexttexttexttexttexttext",
    },
    {
      title: "対象商品の選択",
      exp: "texttexttexttexttexttexttexttext",
    },
    {
      title: "選択した商品のタグ情報編集",
      exp: "texttexttexttexttexttexttexttext",
    },
    {
      title: "ショップ商品情報反映",
      exp: "texttexttexttexttexttexttexttext",
    },
  ];

  return (
    <>
      <Card>
        {datas.map((data, index) => (
          <SfcMediaCard 
            step={index}
            title={data.title} 
            desc={data.exp} 
          />
        ))}
        <div style={{ marginTop: '20px' }}>
          <Card>
            <Text variant="headingMd" as="h3">
              Note
            </Text>
            <List spacing="extraTight">
              <List.Item>-</List.Item>
              <List.Item>リクエストを実行して商品情報を取得</List.Item>
            </List>
          </Card>
        </div>
      </Card>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px'}}>
        <span style={{ marginRight: '8px' }}>Could not retrieve data.</span>
        <Button plain monochrome>
          お問い合わせ
        </Button>
      </div>
    </>
  );
}

/*












*/