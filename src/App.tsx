import React, { useState } from "react";
import { TabsComponent } from "./component-test/disclosure/TabsComponent";

const App = () => {
  const [activeTab, setActiveTab] = useState("members");

  const items = [
    {
      value: "members",
      label: "Members",
      content: <p>Manage your team members</p>,
    },
    {
      value: "projects",
      label: "Projects",
      content: <p>Manage your projects</p>,
    },
    {
      value: "settings",
      label: "Settings",
      content: <p>Manage your settings</p>,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tabs Demo</h2>

      {/* Default */}
      <TabsComponent items={items} defaultValue="members" />

      <br />

      {/* Controlled */}
      <TabsComponent
        items={items}
        value={activeTab}
        onChange={setActiveTab}
      />

      <br />

      {/* With Indicator */}
      <TabsComponent
        items={items}
        defaultValue="members"
        variant="outline"
        showIndicator
      />

      <br />

      {/* Fitted */}
      <TabsComponent items={items} defaultValue="members" fitted />

      <br />

      {/* Lazy Mount */}
      <TabsComponent
        items={items}
        defaultValue="members"
        lazyMount
        unmountOnExit
      />

      <br />

      {/* Vertical */}
      <TabsComponent
        items={items}
        defaultValue="members"
        orientation="vertical"
      />

      <br />

      {/* 🔥 Underline Style */}
      <TabsComponent
        items={items}
        defaultValue="members"
        selectedStyle="underline"
      />

      <br />

      {/* 🔥 Custom Color (Red Underline) */}
      <TabsComponent
        items={items}
        defaultValue="members"
        selectedStyle="underline"
        activeColor="red.500"
      />

      <br />

      {/* 🔥 Green Box Style */}
      <TabsComponent
        items={items}
        defaultValue="members"
        selectedStyle="box"
        activeColor="green.500"
      />

      <br />

      {/* 🔥 Purple + Indicator */}
      <TabsComponent
        items={items}
        defaultValue="members"
        variant="plain"
        showIndicator
        activeColor="purple.500"
      />
    </div>
  );
};

export default App;