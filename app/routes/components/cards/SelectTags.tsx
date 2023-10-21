import {
  Card,
  VerticalStack,
  ButtonGroup,
} from '@shopify/polaris';

import SelectMmultiTags from '../parts/SelectMmultiTags';
import ActionButton from '../parts/ActionButton';
import ActionToggleButton from '../parts/ActionToggleButton';

export default function SelectTags() {
  return (
    <Card>
      <SelectMmultiTags />
      <VerticalStack inlineAlign="center">
        <ButtonGroup>
          <ActionToggleButton toggle1="変更前" toggle2="変更後" />
          <ActionToggleButton toggle1="含む" toggle2="含まない" />
          <ActionButton />
        </ButtonGroup>
      </VerticalStack>
    </Card>
  );
}

