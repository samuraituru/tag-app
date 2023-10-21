import { Frame, Navigation } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  DynamicSourceMajor,
  EditMajor,
  OnlineStoreMinor,
} from "@shopify/polaris-icons";
import { useState } from "react";

import ItemMgmtEdit from "./components/pages/ItemMgmtEdit";
import ItemMgmtGuide from "./components/pages/ItemMgmtGuide";
import ItemMgmtHome from "./components/pages/ItemMgmtHome";
import ItemMgmtNews from "./components/pages/ItemMgmtNews";

export default function Index() {
  const [pageSelect, setPageSelect] = useState("Home");
  const handleSelection = (section) => {
    setPageSelect(section.label);
  };

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Menu"
        items={[
          {
            label: "Home",
            icon: DynamicSourceMajor,
            onClick: () => handleSelection({ label: "Home" }),
          },
          {
            label: "Edit",
            icon: EditMajor,
            onClick: () => handleSelection({ label: "Edit" }),
          },
        ]}
      />

      <Navigation.Section
        items={[
          {
            label: "Guide",
            icon: OnlineStoreMinor,
            onClick: () => handleSelection({ label: "Guide" }),
          },
          {
            label: "News",
            icon: OnlineStoreMinor,
            onClick: () => handleSelection({ label: "News" }),
          },
        ]}
      />
    </Navigation>
  );

  let pageSection;
  switch (pageSelect) {
    case "Home":
      pageSection = <ItemMgmtHome />;
      break;
    case "Edit":
      pageSection = <ItemMgmtEdit />;
      break;
    case "Guide":
      pageSection = <ItemMgmtGuide />;
      break;
    case "News":
      pageSection = <ItemMgmtNews />;
      break;
    default:
      pageSection = "Page Def";
      break;
  }

  return <Frame navigation={navigationMarkup}>{pageSection}</Frame>;
}
