"use client";

import { useCallback } from "react";
import { PERMISSIONS_CONFIG } from "@/app/constants/permissions";
import {
  Container,
  Title,
  ModulesContainer,
  ModuleGroup,
  Row,
  Label,
  ModuleBadge,
  ModuleBadgeText,
  SubModuleBadge,
  SubModuleBadgeText,
  Divider,
} from "./styles";

interface Props {
  permissions: string[];
}

export function ViewPermissions({ permissions }: Props) {
  const isModuleActive = useCallback(
    (moduleIndex: number): boolean => {
      const module = PERMISSIONS_CONFIG[moduleIndex];
      return module.subModules.some((s) => permissions.includes(s.key));
    },
    [permissions]
  );

  const isSubModuleActive = useCallback(
    (key: string): boolean => {
      return permissions.includes(key);
    },
    [permissions]
  );

  return (
    <Container>
      <Title>Permissões de acesso ({permissions.length})</Title>

      <ModulesContainer>
        {PERMISSIONS_CONFIG.map((module, moduleIndex) => {
          const moduleActive = isModuleActive(moduleIndex);

          return (
            <ModuleGroup key={module.module}>
              <Row>
                <Label>Modulo:</Label>
                <ModuleBadge $active={moduleActive}>
                  <ModuleBadgeText $active={moduleActive}>
                    {module.module}
                  </ModuleBadgeText>
                </ModuleBadge>
              </Row>

              {module.subModules.map((subModule) => {
                const subModuleActive = isSubModuleActive(subModule.key);

                return (
                  <Row key={subModule.key}>
                    <Label>Sub-modulo:</Label>
                    <SubModuleBadge $active={subModuleActive}>
                      <SubModuleBadgeText $active={subModuleActive}>
                        {subModule.label}
                      </SubModuleBadgeText>
                    </SubModuleBadge>
                  </Row>
                );
              })}

              {moduleIndex < PERMISSIONS_CONFIG.length - 1 && <Divider />}
            </ModuleGroup>
          );
        })}
      </ModulesContainer>
    </Container>
  );
}
