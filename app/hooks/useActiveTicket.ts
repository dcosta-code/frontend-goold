import { useQuery } from "@tanstack/react-query";
import { hasActiveTicket, HasActiveTicketResponse } from "@/app/services/ticketService";

const ACTIVE_TICKET_QUERY_KEY = "active-ticket";

export function useActiveTicket() {
  return useQuery<HasActiveTicketResponse>({
    queryKey: [ACTIVE_TICKET_QUERY_KEY],
    queryFn: hasActiveTicket,
    staleTime: 0,
    refetchOnMount: true,
  });
}
