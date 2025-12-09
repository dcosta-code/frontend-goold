import { api } from "@/app/config/api";

export interface HasActiveTicketResponse {
  hasActiveTicket: boolean;
  ticketExternalId?: string;
}

export interface CreateTicketRequest {
  message: string;
}

export interface TicketResponse {
  externalId: string;
  status: string;
  createdAt: string;
}

export interface ChatMessageResponse {
  externalId: string;
  ticketExternalId: string;
  senderType: "customer" | "employee";
  senderId: number;
  content: string;
  createdAt: string;
}

export async function hasActiveTicket(): Promise<HasActiveTicketResponse> {
  const response = await api.get<HasActiveTicketResponse>("/tickets/has-active");
  return response.data;
}

export async function createTicket(data: CreateTicketRequest): Promise<TicketResponse> {
  const response = await api.post<TicketResponse>("/tickets", data);
  return response.data;
}

export async function getTicketMessages(ticketExternalId: string): Promise<ChatMessageResponse[]> {
  const response = await api.get<ChatMessageResponse[]>(`/tickets/${ticketExternalId}/messages`);
  return response.data;
}
