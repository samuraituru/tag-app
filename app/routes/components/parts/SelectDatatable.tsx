import {
  IndexTable,
  Card,
  useIndexResourceState,
  Text,
  Badge,
  Thumbnail,
  Pagination,
  VerticalStack,
  Tag,
  LegacyStack,
  Icon,
  HorizontalStack,
} from '@shopify/polaris';
import {MinusMinor, CirclePlusMajor, CircleCancelMajor, CirclePlusMinor} from '@shopify/polaris-icons';

export default function SelectDatatable(props) {

  const orders = [
    {
      id: '1020',
      img: <Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" size="small" alt="Black choker necklace" />,
      name: <div style={{minWidth: '300px', maxWidth: '500px', whiteSpace: 'normal', overflowWrap: 'break-word'}}>ステラおばさんのクッキー お楽しみ袋20枚入り※お届け日指定不可ステラおばさんのクッキー お楽しみ袋20枚入り※お届け日指定不可ステラおばさんのクッキー お楽しみ袋20枚入り※お届け日指定不可</div>,
      before: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
          <HorizontalStack>
            <Placeholder label="2023" /><Placeholder label="2024" /><Placeholder label="2025" />
            <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
            <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
          </HorizontalStack>
        </div>,
      after: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
        <HorizontalStack>
          <Placeholder label="2023" /><Placeholder label="2024" /><Placeholder label="2025" />
          <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
          <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
        </HorizontalStack>
      </div>,
    },
    {
      id: '1019',
      img: <Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" size="small" alt="Black choker necklace" />,
      name: 'バター好きのための',
      before: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
          <HorizontalStack>
            <Placeholder label="2024" /><Placeholder label="2025" />
            <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
            <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
          </HorizontalStack>
        </div>,
      after: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
          <HorizontalStack>
            <Placeholder label="2024" /><Placeholder label="2025" />
            <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
            <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
          </HorizontalStack>
        </div>,
    },
    {
      id: '1018',
      img: <Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" size="small" alt="Black choker necklace" />,
      name: '【24時間限定15%OFF＋ポイント20%還元】【公式】',
      before: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
          <HorizontalStack>
            <Placeholder label="2023" /><Placeholder label="2024" /><Placeholder label="2025" />
            <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
            <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
          </HorizontalStack>
        </div>,
      after: 
        <div style={{minWidth: '300px', maxWidth: '600px'}}>
          <HorizontalStack>
            <Placeholder label="2023" /><Placeholder label="2024" /><Placeholder label="2025" />
            <Placeholder label="Tokyo" /><Placeholder label="Osaka" /><Placeholder label="Fukuoka" />
            <Placeholder label="Japan" /><Placeholder label="USA" /><Placeholder label="Singapore" />
          </HorizontalStack>
        </div>,
    },
  ];
  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(orders);
  
  const customStyle = {
    fontSize: 'var(--p-font-size-700)',
    color: 'var(--p-color-bg-magic-strong)',
    backgroundColor: '#ddd',
    height: '60px',
    padding: '16px',
    display: 'none',
  };

  const rowMarkup = orders.map(
    (
      {id, img, name, before, after},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>{img}</IndexTable.Cell>
        <IndexTable.Cell className="customStyle">{name}</IndexTable.Cell>
        <IndexTable.Cell>{before}</IndexTable.Cell>
        <IndexTable.Cell>{after}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={orders.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Image'},
          {title: 'タイトル'},
          {title: '変更前'},
          {title: '変更後'},
        ]}
      >
        {rowMarkup}
      </IndexTable>
      <VerticalStack inlineAlign="center">
        <Pagination
          hasPrevious
          onPrevious={() => {
            console.log('Previous');
          }}
          hasNext
          onNext={() => {
            console.log('Next');
          }}
        />
      </VerticalStack>

      <div style={customStyle}>This is custom text using Polaris tokens!</div>

    </Card>
  );
}

const Placeholder = ({
  label = '',
  height = 'auto',
  width = 'auto',
}) => {
  return (
    <div
      style={{
        background: 'var(--p-color-bg-strong-hover)',
        padding: 'var(--p-space-1)',
        borderRadius: 'var(--p-border-radius-1)',
        height: height,
        width: width,
        margin: '2px',
      }}
    >
      <HorizontalStack align="center">
        <div
          style={{
            color: 'var(--p-color-bg-inverse)',
            fontSize: 'var(--p-font-size-75)',
            display: 'flex',
            alignItems: 'center',       
          }}
        >
          <Icon source={MinusMinor} color="subdued" />
          <Text as="h3" variant="bodySm" fontWeight="regular">
            {label}
          </Text>
        </div>
      </HorizontalStack>
    </div>
  );
};

/* memo
-
background: 'var(--p-color-bg-strong-hover)',
<Icon source={MinusMinor} color="subdued" />

+
background: 'var(--p-color-bg-primary-subdued-active)',
<Icon source={CirclePlusMinor} color="success" />

*
background: 'var(--p-color-bg-critical-subdued)',
<Icon source={CircleCancelMajor} color="critical" />
*/