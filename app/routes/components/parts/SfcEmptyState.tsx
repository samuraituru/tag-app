import React from 'react';
import { LegacyCard, EmptyState } from '@shopify/polaris';

export default function SearchArea() {
  return (
    <LegacyCard sectioned>
      <EmptyState
        heading="検索結果がここに表示されます"
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>条件に当てはまる商品情報が見つかりませんでした。</p>
      </EmptyState>
    </LegacyCard>
  );
}

