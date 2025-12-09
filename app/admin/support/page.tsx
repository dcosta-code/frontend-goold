"use client";

import { Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SupportPageView } from "./view";

const VALID_TABS = ["support-panel", "configuration"] as const;
const DEFAULT_TAB = "support-panel";

function SupportPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");
  const activeTab =
    tabParam && VALID_TABS.includes(tabParam as (typeof VALID_TABS)[number])
      ? tabParam
      : DEFAULT_TAB;

  const handleTabChange = useCallback(
    (tabId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  return <SupportPageView activeTab={activeTab} onTabChange={handleTabChange} />;
}

export default function SupportPage() {
  return (
    <Suspense fallback={null}>
      <SupportPageContent />
    </Suspense>
  );
}
