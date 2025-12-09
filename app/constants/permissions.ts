export interface PermissionModule {
  module: string;
  subModules: {
    key: string;
    label: string;
  }[];
}

export const PERMISSIONS_CONFIG: PermissionModule[] = [
  {
    module: "Suporte",
    subModules: [
      { key: "support.dashboard", label: "Painel de suporte" },
      { key: "support.configurations", label: "Configurações" },
    ],
  },
  {
    module: "Gestão de acessos",
    subModules: [{ key: "employees.manager", label: "Gestão de acesso" }],
  },
];

export const getPermissionLabel = (key: string): string => {
  for (const module of PERMISSIONS_CONFIG) {
    const subModule = module.subModules.find((s) => s.key === key);
    if (subModule) return subModule.label;
  }
  return key;
};

export const getAllPermissionKeys = (): string[] => {
  return PERMISSIONS_CONFIG.flatMap((module) =>
    module.subModules.map((s) => s.key)
  );
};

export const getPermissionBadges = (permissions: string[]): string[] => {
  const allKeys = getAllPermissionKeys();
  const hasAllPermissions = allKeys.every((key) => permissions.includes(key));

  if (hasAllPermissions) {
    return ["Acesso total"];
  }

  const badges: string[] = [];

  for (const module of PERMISSIONS_CONFIG) {
    const hasAnySubModule = module.subModules.some((s) =>
      permissions.includes(s.key)
    );
    if (hasAnySubModule) {
      badges.push(module.module);
    }
  }

  return badges;
};
