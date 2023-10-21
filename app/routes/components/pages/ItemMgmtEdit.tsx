import {
  Page,
  VerticalStack,
} from '@shopify/polaris';

import ItemsSelectTable from '../cards/ItemsSelectTable';
import SelectTags from '../cards/SelectTags';
import SelectTag from '../cards/SelectTag';
import SearchResult from '../cards/SearchResult';

export default function ItemMgmtEdit() {
  return (
    <Page
      fullWidth
    >
      <VerticalStack gap="4">
        <SelectTags />
        <ItemsSelectTable />
        <SearchResult />
        <SelectTag />
      </VerticalStack>
    </Page>
  );
}
  
  