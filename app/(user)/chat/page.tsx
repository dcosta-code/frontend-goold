"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDay, getHours } from "date-fns";
import { ChatPageView } from "./view";

type TeamStatus = "online" | "offline" | "lunch";

interface Attendant {
  name: string;
  role: string;
  avatarSrc?: string;
  isOnline?: boolean;
}

function getTeamStatus(date: Date): TeamStatus {
  const dayOfWeek = getDay(date);
  const hour = getHours(date);
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 6;
  if (!isWeekday) return "offline";
  if (hour >= 12 && hour < 13) return "lunch";
  if (hour >= 8 && hour < 16) return "online";
  return "offline";
}

export default function ChatPage() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [teamStatus, setTeamStatus] = useState<TeamStatus>(() =>
    getTeamStatus(new Date())
  );
  const [attendant] = useState<Attendant | null>(null);

  useEffect(() => {
    const updateStatus = () => setTeamStatus(getTeamStatus(new Date()));
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleBack = useCallback(() => router.back(), [router]);
  const handleAttach = useCallback(() => router.push("/chat/rating"), [router]);

  return (
    <ChatPageView
      messages={[]}
      inputValue={inputValue}
      isTeamOnline={teamStatus === "online"}
      isLunchTime={teamStatus === "lunch"}
      isLoading={false}
      attendant={attendant}
      onInputChange={setInputValue}
      onSend={() => {}}
      onBack={handleBack}
      onAttach={handleAttach}
      onRetry={() => {}}
    />
  );
}
