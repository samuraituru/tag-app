import {
  Page,
} from '@shopify/polaris';
import { RefreshMajor, ArrowDownMinor } from '@shopify/polaris-icons';

import ActionHistory from '../cards/ActionHistory';

export default function ItemMgmtHome() {

  const testAction = () => {console.log('Action')};

  return (
    <Page
      fullWidth
      title="操作履歴"
      primaryAction={{
        content: 'リクエスト',
        onAction: testAction,
      }}
      secondaryActions={[
        {
          content: '更新',
          disabled: false,
          icon: RefreshMajor,
          helpText: 'You need permission to import products.',
          onAction: testAction,
        },
      ]}
    >
      <ActionHistory />
    </Page>
  );
}
  
