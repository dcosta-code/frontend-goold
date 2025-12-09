"use client";

import { Suspense, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RatingPageView } from "./view";

function RatingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const attendantName = searchParams.get("attendant") || "";
  const ticketId = searchParams.get("ticketId") || "";

  const [rating, setRating] = useState(0);

  const handleClose = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const handleSubmit = useCallback(() => {
    if (rating > 0) {
      console.log("Submitting rating:", {
        ticketId,
        attendantName,
        rating,
      });
      router.push("/chat");
    }
  }, [rating, ticketId, attendantName, router]);

  const isSubmitDisabled = rating === 0;

  return (
    <RatingPageView
      attendantName={attendantName}
      rating={rating}
      onRatingChange={setRating}
      onSubmit={handleSubmit}
      onClose={handleClose}
      isSubmitDisabled={isSubmitDisabled}
    />
  );
}

export default function RatingPage() {
  return (
    <Suspense>
      <RatingContent />
    </Suspense>
  );
}
