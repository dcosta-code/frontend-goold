"use client";

import { Text } from "../Text";
import { TabsContainer, TabButton, TabIndicator } from "./styles";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: Props) {
  return (
    <TabsContainer>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <TabButton
            key={tab.id}
            $isActive={isActive}
            onClick={() => onTabChange(tab.id)}
          >
            <Text size="sm" weight="regular">
              {tab.label}
            </Text>
            <TabIndicator $isActive={isActive} />
          </TabButton>
        );
      })}
    </TabsContainer>
  );
}
