import {
    Frame,
    Navigation,
    Card,
    VerticalStack,
    FormLayout,
    ButtonGroup,
    Button,
  } from '@shopify/polaris';
  import { ArrowLeftMinor, HomeMajor, OrdersMajor, ConversationMinor, OnlineStoreMinor, CirclePlusOutlineMinor } from '@shopify/polaris-icons';
  import { useState } from 'react';
  
  import DatatableSimple from '../parts/DatatableSimple'
  import Datatable from '../parts/SelectDatatable';
  import TagSelect from '../parts/TagSelect';

  import ItemEdit from '../pages/ItemEdit';

  export default function ItemManagement() {
  
    const [expanded, setExpanded] = useState(false);
  
    const [pageSelect, setPageSelect] = useState('');
    const handleSelection = (section) => {
      setPageSelect(section.label);
    };
  
    const navigationMarkup = (
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              label: 'Back to Shopify',
              icon: ArrowLeftMinor,
            },
          ]}
        />
        <Navigation.Section
          separator
          title="Jaded Pixel App"
          items={[
            {
              label: 'Page_01',
              icon: HomeMajor,
              onClick: () => handleSelection({ label: 'page01' }),
            },
            {
              label: 'Page_02',
              icon: OrdersMajor,
              onClick: () => handleSelection({ label: 'page02' }),
            },
            {
              label: 'Page_03',
              icon: OrdersMajor,
              onClick: () => handleSelection({ label: 'page03' }),
            },
          ]}
          action={{
            icon: ConversationMinor,
            accessibilityLabel: 'Contact support',
            onClick: () => handleSelection({ label: 'page03' }),
          }}
        />
  
        <Navigation.Section
          title="Sales channels"
          items={[
            {
              label: 'Online Store',
              icon: OnlineStoreMinor,
              onClick: () => handleSelection({ label: 'pageicon' }),
            },
          ]}
          action={{
            accessibilityLabel: 'Add sales channel',
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
  
      </Navigation>
    );
  
    let pageSection;
    switch (pageSelect) {
      case 'page01':
        pageSection = <ItemEdit />;
        break;
      case 'page02':
        pageSection = 
          <VerticalStack gap="4">
            <Card>
              <FormLayout>
                <TagSelect />
                <VerticalStack inlineAlign="center">
                  <ButtonGroup>
                    <Button
                      fullWidth
                      textAlign="left"
                      disclosure={expanded ? 'up' : 'down'}
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? 'Show less' : 'Show more'}
                    </Button>
                    <Button primary>Search</Button>
                  </ButtonGroup>
                </VerticalStack>
              </FormLayout>
            </Card>
            <Card padding="4">
              <Datatable />
            </Card>
            <Card padding="4">
            <FormLayout>
              <TagSelect />
              <VerticalStack inlineAlign="center">
                <ButtonGroup>
                  <Button primary>Update</Button>
                </ButtonGroup>
              </VerticalStack>
              </FormLayout>
            </Card>
          </VerticalStack>;
        break;
      case 'page04':
        pageSection = 'Page3';
        break;
      case 'page04':
        pageSection = 'Page4';
        break;
      case 'pageicon':
        pageSection = 'Page icon';
        break;
      default:
        pageSection = 'Page Def';
        break;
    }
  
    return (
      <Frame
        navigation={navigationMarkup}
      >
        {pageSection}
      </Frame>
    );
  }
  
  