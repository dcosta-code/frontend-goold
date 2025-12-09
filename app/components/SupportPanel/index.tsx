"use client";

import { useState, useMemo } from "react";
import { MonthlyRanking } from "../MonthlyRanking";
import { DisplayInfoCard } from "../DisplayInfoCard";
import { OptionsBar } from "../OptionsBar";
import { StatusLegend } from "../StatusLegend";
import { SupportTable } from "../SupportTable";
import { TableFilterBar } from "../TableFilterBar";
import { TicketDetailsModal, TicketData, MessageData } from "../TicketDetailsModal";
import { Container, CardsRow, OptionsRow, LegendRow } from "./styles";

const clientStatusOptions = [
  { title: "Todos", code: "all" },
  { title: "Clientes Em Espera", code: "waiting" },
  { title: "Clientes Em Atendimento", code: "in-progress" },
  { title: "Clientes Satisfeito", code: "satisfied" },
];

const categoryOptions = [
  { title: "Todos", code: "all" },
  { title: "Logística", code: "logistics" },
  { title: "Reembolso", code: "refund" },
  { title: "Outros", code: "others" },
];

const mockRepresentatives = [
  {
    rank: "1",
    name: "Mario Perreira",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "9.100",
    rating: "4.7",
    reviewsCount: "10.000",
  },
  {
    rank: "2",
    name: "Raphaella Cleffs",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "8.300",
    rating: "4.9",
    reviewsCount: "8.000",
  },
  {
    rank: "3",
    name: "Renata Rolemberg",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "7.191",
    rating: "4.8",
    reviewsCount: "6.210",
  },
  {
    rank: "4",
    name: "Alice Perreira",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "7.191",
    rating: "4.8",
    reviewsCount: "6.210",
  },
  {
    rank: "5",
    name: "Melissa fernandes",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "5.212",
    rating: "4.8",
    reviewsCount: "6.210",
  },
  {
    rank: "6",
    name: "Joyce Barbosa",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    satisfiedClients: "4.210",
    rating: "4.8",
    reviewsCount: "6.210",
  },
];

const attendantOptions = [
  { value: "mario", label: "Mario Perreira" },
  { value: "raphaella", label: "Raphaella Cleffs" },
  { value: "renata", label: "Renata Rolemberg" },
  { value: "alice", label: "Alice Perreira" },
];

const tagOptions = [
  { value: "logistics", label: "Logistica" },
  { value: "refund", label: "Reembolso" },
  { value: "other", label: "Outros" },
];

const statusOptions = [
  { value: "waiting", label: "Em Espera" },
  { value: "inProgress", label: "Em Atendimento" },
  { value: "satisfied", label: "Satisfeito" },
];

type RowStatus = "waiting" | "inProgress" | "satisfied";
type TagType = "logistics" | "refund" | "other";

interface TableRow {
  id: string;
  date: string;
  attendant: string;
  tag: TagType;
  lastMessage: string;
  messageCount: number;
  customer: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  status: RowStatus;
}

const mockTableData: TableRow[] = [
  {
    id: "1",
    date: "01/12/2024",
    attendant: "mario",
    tag: "logistics",
    lastMessage: "Ola, preciso de ajuda com meu pedido...",
    messageCount: 3,
    customer: {
      name: "Joao Silva",
      role: "Cliente Premium",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    status: "waiting",
  },
  {
    id: "2",
    date: "30/11/2024",
    attendant: "raphaella",
    tag: "refund",
    lastMessage: "Solicito reembolso do produto...",
    messageCount: 5,
    customer: {
      name: "Maria Santos",
      role: "Cliente",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    status: "inProgress",
  },
  {
    id: "3",
    date: "29/11/2024",
    attendant: "renata",
    tag: "other",
    lastMessage: "Obrigado pelo atendimento!",
    messageCount: 8,
    customer: {
      name: "Carlos Oliveira",
      role: "Cliente VIP",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    status: "satisfied",
  },
  {
    id: "4",
    date: "28/11/2024",
    attendant: "alice",
    tag: "logistics",
    lastMessage: "Quando chega meu pedido?",
    messageCount: 2,
    customer: {
      name: "Ana Paula Costa",
      role: "Cliente",
    },
    status: "waiting",
  },
  {
    id: "5",
    date: "27/11/2024",
    attendant: "mario",
    tag: "refund",
    lastMessage: "Ainda aguardando o reembolso...",
    messageCount: 12,
    customer: {
      name: "Pedro Almeida",
      role: "Cliente Premium",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    status: "inProgress",
  },
];

const mockMessagesMap: Record<string, MessageData[]> = {
  "1": [
    {
      id: "msg-1-1",
      senderName: "Joao Silva",
      message: "Ola, preciso de ajuda com meu pedido. Ele ainda nao chegou e ja faz mais de uma semana.",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "01/12/2024 10:30",
      position: "left",
    },
    {
      id: "msg-1-2",
      senderName: "Mario Perreira",
      message: "Olá Joao! Vou verificar o status do seu pedido agora mesmo. Pode me informar o numero do pedido?",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "01/12/2024 10:32",
      position: "right",
    },
    {
      id: "msg-1-3",
      senderName: "Joao Silva",
      message: "O numero do pedido e #12345. Obrigado pela ajuda!",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "01/12/2024 10:35",
      position: "left",
    },
  ],
  "2": [
    {
      id: "msg-2-1",
      senderName: "Maria Santos",
      message: "Solicito reembolso do produto que recebi danificado.",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      isOnline: false,
      timestamp: "30/11/2024 14:00",
      position: "left",
    },
    {
      id: "msg-2-2",
      senderName: "Raphaella Cleffs",
      message: "Ola Maria, lamento pelo inconveniente. Poderia enviar fotos do produto danificado?",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "30/11/2024 14:15",
      position: "right",
    },
  ],
  "3": [
    {
      id: "msg-3-1",
      senderName: "Carlos Oliveira",
      message: "Problema resolvido! Obrigado pelo atendimento!",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "29/11/2024 16:00",
      position: "left",
    },
  ],
  "4": [
    {
      id: "msg-4-1",
      senderName: "Ana Paula Costa",
      message: "Quando chega meu pedido? Fiz a compra ha 3 dias.",
      avatarSrc: "",
      isOnline: false,
      timestamp: "28/11/2024 09:00",
      position: "left",
    },
  ],
  "5": [
    {
      id: "msg-5-1",
      senderName: "Pedro Almeida",
      message: "Ainda aguardando o reembolso que foi prometido ha 5 dias.",
      avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isOnline: true,
      timestamp: "27/11/2024 11:00",
      position: "left",
    },
  ],
};

export function SupportPanel() {
  const [clientStatus, setClientStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [tableData, setTableData] = useState<TableRow[]>(mockTableData);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [attendantFilter, setAttendantFilter] = useState("");
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [ticketMessages, setTicketMessages] = useState<Record<string, MessageData[]>>(mockMessagesMap);

  const filterAttendantOptions = [
    { value: "", label: "Todas atendentes" },
    ...attendantOptions,
  ];

  const currentTicketIndex = useMemo(() => {
    if (!selectedTicketId) return 0;
    return tableData.findIndex((row) => row.id === selectedTicketId);
  }, [selectedTicketId, tableData]);

  const selectedTicket = useMemo((): TicketData | null => {
    if (!selectedTicketId) return null;
    const row = tableData.find((r) => r.id === selectedTicketId);
    if (!row) return null;

    return {
      id: row.id,
      tagValue: row.tag,
      userName: row.customer.name,
      userAvatarSrc: row.customer.avatarUrl || "",
      userIsOnline: true,
      statusValue: row.status,
      messages: ticketMessages[row.id] || [],
    };
  }, [selectedTicketId, tableData, ticketMessages]);

  const handleRowChange = (id: string, field: string, value: string) => {
    setTableData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleRowClick = (row: TableRow) => {
    setSelectedTicketId(row.id);
    setIsTicketModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTicketModalOpen(false);
    setSelectedTicketId(null);
  };

  const handlePrevTicket = () => {
    if (currentTicketIndex > 0) {
      setSelectedTicketId(tableData[currentTicketIndex - 1].id);
    }
  };

  const handleNextTicket = () => {
    if (currentTicketIndex < tableData.length - 1) {
      setSelectedTicketId(tableData[currentTicketIndex + 1].id);
    }
  };

  const handleTagChange = (value: string) => {
    if (selectedTicketId) {
      setTableData((prev) =>
        prev.map((row) =>
          row.id === selectedTicketId ? { ...row, tag: value as TagType } : row
        )
      );
    }
  };

  const handleStatusChange = (value: string) => {
    if (selectedTicketId) {
      setTableData((prev) =>
        prev.map((row) =>
          row.id === selectedTicketId ? { ...row, status: value as RowStatus } : row
        )
      );
    }
  };

  const handleSendMessage = (content: string) => {
    if (selectedTicketId) {
      const newMessage: MessageData = {
        id: `msg-${selectedTicketId}-${Date.now()}`,
        senderName: "Atendente",
        message: content,
        avatarSrc: "",
        isOnline: true,
        timestamp: new Date().toLocaleString("pt-BR"),
        position: "right",
      };

      setTicketMessages((prev) => ({
        ...prev,
        [selectedTicketId]: [...(prev[selectedTicketId] || []), newMessage],
      }));
    }
  };

  return (
    <Container>
      <MonthlyRanking representatives={mockRepresentatives} />
      <CardsRow>
        <DisplayInfoCard label="Clientes Em Espera" value="500" />
        <DisplayInfoCard label="Clientes Em Atendimento" value="2.000" />
        <DisplayInfoCard label="Clientes Satisfeito" value="50.000" />
      </CardsRow>
      <OptionsRow>
        <OptionsBar
          options={clientStatusOptions}
          value={clientStatus}
          onChange={setClientStatus}
        />
        <OptionsBar
          options={categoryOptions}
          value={category}
          onChange={setCategory}
        />
      </OptionsRow>
      <LegendRow>
        <StatusLegend color="waiting" title="Aguardado resposta" />
        <StatusLegend color="responded" title="Respondido" />
        <StatusLegend color="delayed" title="Resposta atrasada" />
      </LegendRow>
      <TableFilterBar
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        dateValue={dateFilter}
        onDateChange={(e) => setDateFilter(e.target.value)}
        attendantValue={attendantFilter}
        onAttendantChange={(e) => setAttendantFilter(e.target.value)}
        attendantOptions={filterAttendantOptions}
        onShuffle={() => console.log("shuffle")}
        onRefresh={() => console.log("refresh")}
      >
        <SupportTable
          data={tableData}
          attendantOptions={attendantOptions}
          tagOptions={tagOptions}
          statusOptions={statusOptions}
          onRowChange={handleRowChange}
          onRowClick={handleRowClick}
        />
      </TableFilterBar>

      <TicketDetailsModal
        isOpen={isTicketModalOpen}
        onClose={handleCloseModal}
        ticket={selectedTicket}
        currentIndex={currentTicketIndex}
        totalTickets={tableData.length}
        onPrevTicket={handlePrevTicket}
        onNextTicket={handleNextTicket}
        tagOptions={tagOptions}
        statusOptions={statusOptions}
        onTagChange={handleTagChange}
        onStatusChange={handleStatusChange}
        onSendMessage={handleSendMessage}
      />
    </Container>
  );
}
