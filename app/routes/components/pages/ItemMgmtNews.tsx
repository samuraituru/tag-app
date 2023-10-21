import {
  Page,
} from '@shopify/polaris';

import News from '../cards/News';

export default function ItemMgmtGuide() {
  return (
    <Page
      title="Information"
      primaryAction={{
        content: 'Donwload',
      }}
      secondaryActions={[
        {
          content: 'Update',
          disabled: true,
          helpText: 'You need permission to import products.',
        },
      ]}
    >
      <News />
    </Page>
  );
}
  
/*
App案内
更新履歴
問い合わせ先
*/