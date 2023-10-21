import {
  Card,
  VerticalStack,
  ButtonGroup,
  FormLayout,
} from '@shopify/polaris';

import SelectTags from '../parts/SelectTags';
import ActionButton from '../parts/ActionButton';
import ActionToggleButton from '../parts/ActionToggleButton';

export default function SearchArea() {
  return (
    <Card>
      <FormLayout>
        <SelectTags />
        <VerticalStack inlineAlign="center">
          <ButtonGroup>
            <ActionToggleButton toggle1="追加" toggle2="削除"/>
            <ActionButton />
          </ButtonGroup>
        </VerticalStack>
      </FormLayout>
    </Card>
  );
}

