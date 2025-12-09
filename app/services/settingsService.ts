import { api } from "@/app/config/api";

export interface ConfigurationOption {
  code: string;
  display: string;
}

export interface ConfigurationResponse {
  externalId: string;
  code: string;
  display: string;
  options: ConfigurationOption[];
  selected: string[];
  ranking: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TagResponse {
  externalId: string;
  name: string;
  backgroundColor: string;
  textColor: string;
  createdAt: string;
  updatedAt: string;
}

export interface MessageTemplateResponse {
  externalId: string;
  name: string;
  htmlContent: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmailSignatureResponse {
  externalId: string;
  htmlContent: string;
  createdAt: string;
  updatedAt: string;
}

export interface AllSettingsResponse {
  tags: TagResponse[];
  messageTemplates: MessageTemplateResponse[];
  emailSignature: EmailSignatureResponse | null;
  configurations: ConfigurationResponse[];
}

export interface TagItemRequest {
  externalId?: string | null;
  name: string;
  backgroundColor: string;
  textColor: string;
}

export interface MessageTemplateItemRequest {
  externalId?: string | null;
  name: string;
  htmlContent: string;
}

export interface UpdateEmailSignatureRequest {
  htmlContent: string;
}

export interface UpdateConfigurationItemRequest {
  externalId: string;
  selected: string[];
  isActive: boolean;
}

export interface UpdateSettingsRequest {
  tags?: TagItemRequest[];
  messageTemplates?: MessageTemplateItemRequest[];
  emailSignature?: UpdateEmailSignatureRequest;
  configurations?: UpdateConfigurationItemRequest[];
}

export async function getSettings(): Promise<AllSettingsResponse> {
  const response = await api.get<AllSettingsResponse>("/settings");
  return response.data;
}

export async function updateSettings(
  data: UpdateSettingsRequest
): Promise<AllSettingsResponse> {
  const response = await api.put<AllSettingsResponse>("/settings", data);
  return response.data;
}
