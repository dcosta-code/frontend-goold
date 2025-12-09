"use client";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { MenuProfile } from "../../components/MenuProfile";
import { Tabs } from "../../components/Tabs";
import { SupportPanel } from "../../components/SupportPanel";
import { Configuration } from "../../components/Configuration";
import {
  PageContainer,
  ContentWrapper,
  MainContent,
  TabsWrapper,
  TabContent,
} from "./styles";

const tabs = [
  { id: "support-panel", label: "Painel de suporte" },
  { id: "configuration", label: "Configurações" },
];

interface Props {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function SupportPageView({ activeTab, onTabChange }: Props) {
  return (
    <PageContainer>
      <Sidebar />
      <ContentWrapper>
        <Header
          title="Experiência do cliente"
          subtitle="Cada detalhe conta para oferecer uma experiência encantadora"
        >
          <MenuProfile
            name="Mateus Barbosa"
            role="Administrador"
            imageUrl="https://i.pravatar.cc/150?img=12"
          />
        </Header>
        <MainContent>
          <TabsWrapper>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={onTabChange}
            />
          </TabsWrapper>
          <TabContent>
            {activeTab === "support-panel" && <SupportPanel />}
            {activeTab === "configuration" && <Configuration />}
          </TabContent>
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
}
