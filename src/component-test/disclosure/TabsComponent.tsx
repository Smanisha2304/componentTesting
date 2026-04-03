import React from "react";
import { Tabs, Box } from "@chakra-ui/react";

export type TabsVariant =
  | "line"
  | "subtle"
  | "enclosed"
  | "outline"
  | "plain";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsComponentProps {
  items: TabItem[];

  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;

  variant?: TabsVariant;
  size?: "sm" | "md" | "lg";

  fitted?: boolean;
  justify?: "start" | "center" | "end";

  lazyMount?: boolean;
  unmountOnExit?: boolean;

  orientation?: "horizontal" | "vertical";

  showIndicator?: boolean;

  colorPalette?:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink";

  // ✅ NEW
  selectedStyle?: "box" | "underline";
  activeColor?: string;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  items,
  defaultValue,
  value,
  onChange,

  variant = "line",
  size = "md",

  fitted = false,
  justify = "start",

  lazyMount = false,
  unmountOnExit = false,

  orientation = "horizontal",

  showIndicator = false,

  colorPalette = "gray",

  // ✅ new defaults
  selectedStyle = "box",
  activeColor = "blue.500",
}) => {
  if (!items?.length) return null;

  return (
    <Tabs.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={(e) => onChange?.(e.value)}
      variant={variant}
      size={size}
      fitted={fitted}
      justify={justify}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      orientation={orientation}
      colorPalette={colorPalette}
    >
      <Tabs.List>
        {items.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            _selected={
              selectedStyle === "box"
                ? {
                    bg: activeColor,
                    color: "white",
                  }
                : {
                    color: activeColor,
                    borderBottom: "2px solid",
                    borderColor: activeColor,
                    borderRadius: "0",
                  }
            }
          >
            {tab.label}
          </Tabs.Trigger>
        ))}

        {showIndicator && <Tabs.Indicator />}
      </Tabs.List>

      <Box pos="relative" w="100%">
        {items.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  );
};