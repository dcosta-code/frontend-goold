"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "styled-components";
import { Logo } from "@/app/icons/Logo";
import { RingLife } from "@/app/icons/RingLife";
import { UsersIcon } from "@/app/icons/UsersIcon";
import { Text } from "../Text";
import {
  SidebarContainer,
  LogoContainer,
  Navigation,
  MenuItemContainer,
  IconWrapper,
} from "./styles";

type IconName = "ringLife" | "users";

interface MenuItem {
  title: string;
  path: string;
  icon: IconName;
}

const menuItems: MenuItem[] = [
  {
    title: "Suporte",
    path: "/admin/support",
    icon: "ringLife",
  },
  {
    title: "Gestão de acessos",
    path: "/admin/employees",
    icon: "users",
  },
];

const iconComponents: Record<
  IconName,
  React.FC<{ width?: number; height?: number; color?: string }>
> = {
  ringLife: RingLife,
  users: UsersIcon,
};

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo width={52} height={52} />
      </LogoContainer>
      <Navigation>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const IconComponent = iconComponents[item.icon];
          const iconColor = isActive
            ? theme.colors.text.inverse
            : theme.colors.text.primary;

          return (
            <MenuItemContainer
              key={item.path}
              $isActive={isActive}
              onClick={() => handleNavigation(item.path)}
            >
              <IconWrapper>
                <IconComponent width={20} height={20} color={iconColor} />
              </IconWrapper>
              <Text
                size="md"
                weight="medium"
                color={isActive ? "inverse" : "primary"}
              >
                {item.title}
              </Text>
            </MenuItemContainer>
          );
        })}
      </Navigation>
    </SidebarContainer>
  );
}
