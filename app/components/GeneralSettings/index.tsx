"use client";

import { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import { Input } from "../Input";
import { InputSelect } from "../InputSelect";
import { Toggle } from "../Toggle";
import { Text } from "../Text";
import { useSettings } from "@/app/hooks/useSettings";
import { ConfigurationOption } from "@/app/services/settingsService";
import {
  Container,
  Header,
  Content,
  Row,
  InputWrapper,
  SelectWrapper,
  ToggleWrapper,
  Divider,
} from "./styles";

const TOGGLE_ENABLED_CODES = ["PESQUISA_NPS", "TEMPO_ESPERA_CHAT"];

function shouldShowToggle(code: string): boolean {
  return TOGGLE_ENABLED_CODES.includes(code);
}

function transformOptions(options: ConfigurationOption[]) {
  return options.map((opt) => ({
    value: opt.code,
    label: opt.display,
  }));
}

function shouldRenderDivider(index: number, total: number): boolean {
  if (index === 2) return true;
  if (index === 5) return true;
  if (index >= 7 && (index - 5) % 2 === 0 && index < total - 1) return true;
  return false;
}

export function GeneralSettings() {
  const { data, isLoading, isError } = useSettings();
  const configurations = data?.configurations;

  const sortedConfigurations = useMemo(() => {
    if (!configurations) return [];
    return [...configurations].sort((a, b) => a.ranking - b.ranking);
  }, [configurations]);

  const [selections, setSelections] = useState<Record<string, string>>({});
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (configurations) {
      const initialSelections: Record<string, string> = {};
      const initialToggles: Record<string, boolean> = {};

      configurations.forEach((config) => {
        initialSelections[config.code] = config.selected[0] || "";
        initialToggles[config.code] = config.isActive;
      });

      setSelections(initialSelections);
      setToggleStates(initialToggles);
    }
  }, [configurations]);

  const handleSelectionChange = useCallback((code: string, value: string) => {
    setSelections((prev) => ({ ...prev, [code]: value }));
  }, []);

  const handleToggleChange = useCallback((code: string, checked: boolean) => {
    setToggleStates((prev) => ({ ...prev, [code]: checked }));
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Header>
          <Text as="h2" size="lg" weight="medium">
            Configurações gerais
          </Text>
        </Header>
        <Content>
          <Text size="md" color="secondary">
            Carregando configurações...
          </Text>
        </Content>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Header>
          <Text as="h2" size="lg" weight="medium">
            Configurações gerais
          </Text>
        </Header>
        <Content>
          <Text size="md" color="error">
            Erro ao carregar configuracoes.
          </Text>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Text as="h2" size="lg" weight="medium">
          Configurações gerais
        </Text>
      </Header>
      <Content>
        {sortedConfigurations.map((config, index) => (
          <Fragment key={config.externalId}>
            <Row>
              <InputWrapper>
                <Input title="Tipo" defaultValue={config.display} disabled />
              </InputWrapper>
              <SelectWrapper>
                <InputSelect
                  title="Selecione"
                  value={selections[config.code] || ""}
                  onChange={(e) =>
                    handleSelectionChange(config.code, e.target.value)
                  }
                  options={transformOptions(config.options)}
                />
              </SelectWrapper>
              {shouldShowToggle(config.code) && (
                <ToggleWrapper>
                  <Toggle
                    checked={toggleStates[config.code] ?? config.isActive}
                    onChange={(checked) =>
                      handleToggleChange(config.code, checked)
                    }
                  />
                </ToggleWrapper>
              )}
            </Row>
            {shouldRenderDivider(index, sortedConfigurations.length) && (
              <Divider />
            )}
          </Fragment>
        ))}
      </Content>
    </Container>
  );
}
