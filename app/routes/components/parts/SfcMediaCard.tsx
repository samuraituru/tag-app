import React from 'react';
import { MediaCard } from '@shopify/polaris';

export default function DisplayParts(props) {
  const combinedTitle = `Step.${props.step + 1} ${props.title}`;

  return (
    <MediaCard
      title={combinedTitle}
      description={props.desc}
      size="small"
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://placehold.jp/256/FFEF55/009A63/1850x1233.jpg?text=image"
      />
    </MediaCard>
  );
}

