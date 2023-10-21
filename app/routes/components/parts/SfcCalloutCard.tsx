import React from 'react';
import {CalloutCard} from '@shopify/polaris';

export default function SearchArea() {
  return (
    <CalloutCard
      title="Customize the style of your checkout"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: 'none',
        url: '',
      }}
    >
      <p>Upload your store’s logo, change colors and fonts, and more.</p>
    </CalloutCard>
  );
}

