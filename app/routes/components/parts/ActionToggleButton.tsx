import {
  Button,
} from '@shopify/polaris';
import { useState } from 'react';

export default function ActionToggleButton(props) {

  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{width: '120px'}}>
      <Button
        fullWidth
        textAlign="left"
        disclosure="select"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? props.toggle1 : props.toggle2}
      </Button>
    </div>
  );
}
