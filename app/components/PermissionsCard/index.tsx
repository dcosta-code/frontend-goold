"use client";

import { Text } from "../Text";
import { Badge } from "../Badge";
import { PERMISSIONS_CONFIG } from "@/app/constants/permissions";
import {
  Container,
  Content,
  Title,
  Module,
  Group,
  Row,
  Label,
  Divider,
} from "./styles";

interface Props {
  selectedPermissions: string[];
  onTogglePermission: (permissionKey: string) => void;
  title?: string;
}

export function PermissionsCard({
  selectedPermissions,
  onTogglePermission,
  title = "Permissões de acesso",
}: Props) {
  const handleModuleToggle = (moduleIndex: number) => {
    const module = PERMISSIONS_CONFIG[moduleIndex];
    const moduleKeys = module.subModules.map((s) => s.key);
    const allSelected = moduleKeys.every((key) =>
      selectedPermissions.includes(key)
    );

    if (allSelected) {
      moduleKeys.forEach((key) => {
        if (selectedPermissions.includes(key)) {
          onTogglePermission(key);
        }
      });
    } else {
      moduleKeys.forEach((key) => {
        if (!selectedPermissions.includes(key)) {
          onTogglePermission(key);
        }
      });
    }
  };

  const isModuleActive = (moduleIndex: number): boolean => {
    const module = PERMISSIONS_CONFIG[moduleIndex];
    return module.subModules.some((s) => selectedPermissions.includes(s.key));
  };

  return (
    <Container>
      <Content>
        <Title>
          <Text size="xl" weight="medium" color="primary">
            {title} ({selectedPermissions.length})
          </Text>
        </Title>

        {PERMISSIONS_CONFIG.map((permission, moduleIndex) => (
          <Module key={moduleIndex}>
            <Group>
              <Row>
                <Label>
                  <Text
                    size="md"
                    weight="regular"
                    color="primary"
                    lineHeight="20px"
                  >
                    Modulo:
                  </Text>
                </Label>
                <Badge
                  variant="filled"
                  active={isModuleActive(moduleIndex)}
                  onClick={() => handleModuleToggle(moduleIndex)}
                >
                  {permission.module}
                </Badge>
              </Row>

              <Divider />

              {permission.subModules.map((subModule) => (
                <Row key={subModule.key}>
                  <Label>
                    <Text
                      size="md"
                      weight="regular"
                      color="primary"
                      lineHeight="20px"
                    >
                      Sub-modulo:
                    </Text>
                  </Label>
                  <Badge
                    active={selectedPermissions.includes(subModule.key)}
                    onClick={() => onTogglePermission(subModule.key)}
                  >
                    {subModule.label}
                  </Badge>
                </Row>
              ))}
            </Group>
          </Module>
        ))}
      </Content>
    </Container>
  );
}
