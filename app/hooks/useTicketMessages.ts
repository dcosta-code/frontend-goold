import { useQuery } from "@tanstack/react-query";
import { getTicketMessages, ChatMessageResponse } from "@/app/services/ticketService";

const TICKET_MESSAGES_QUERY_KEY = "ticket-messages";

export function useTicketMessages(ticketExternalId: string | null) {
  return useQuery<ChatMessageResponse[]>({
    queryKey: [TICKET_MESSAGES_QUERY_KEY, ticketExternalId],
    queryFn: () => getTicketMessages(ticketExternalId!),
    enabled: !!ticketExternalId,
  });
}
