"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 justify-center items-center">
      <h2>There was an error fetching stock data.</h2>
    </div>
  );
}
