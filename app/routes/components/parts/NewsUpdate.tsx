import React from 'react';
import {
  ResourceList,
  ResourceItem,
  Avatar,
  Text,
} from '@shopify/polaris';

export default function NewsUpdate() {
  return (
    <ResourceList
      resourceName={{singular: 'customer', plural: 'customers'}}
      items={[
        {
          id: '100',
          url: '#',
          name: 'Mae Jemison',
          location: 'Decatur, USA',
        },
        {
          id: '200',
          url: '#',
          name: 'Ellen Ochoa',
          location: 'Los Angeles, USA',
        },
        {
          id: '200',
          url: '#',
          name: 'Ellen Ochoa',
          location: 'Los Angeles, USA',
        },
        {
          id: '200',
          url: '#',
          name: 'Ellen Ochoa',
          location: 'Los Angeles, USA',
        },
      ]}
      renderItem={(item) => {
        const {id, url, name, location } = item;
        const media = <Avatar customer size="medium" name={name} />;
        return (
          <ResourceItem
            id={id}
            url={url}
            media={media}
            accessibilityLabel={`View details for ${name}`}
          >
            <Text variant="bodyMd" fontWeight="bold" as="h3">
              {name}
            </Text>
            <div>{location}</div>
          </ResourceItem>
        );
      }}
    />
  );
}
