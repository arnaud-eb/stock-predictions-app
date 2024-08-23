"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";

const ActionPanel: FC = () => {
  const [tickers, setTickers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target as HTMLFormElement);
    const ticker = formData.get("ticker-input")?.toString().trim();

    if (ticker && ticker.length > 2) {
      formRef.current?.reset();
      setTickers([...tickers, ticker]);
    } else {
      setError(
        "You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla."
      );
    }
  };

  return (
    <section className="flex flex-col justify-around items-center my-6 mx-8 h-80 leading-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-96"
      >
        <label
          htmlFor="ticker-input"
          className={twJoin(
            "text-center p-2 text-base mb-4 w-4/5",
            error && "text-red-500"
          )}
        >
          {error
            ? error
            : "Add up to 3 stock tickers below to get a super accurate stock predictions report👇"}
        </label>
        <div className="flex w-3/4">
          <input
            type="text"
            id="ticker-input"
            name="ticker-input"
            placeholder="MSFT"
            className="p-4 border-2 border-black border-r-0 grow"
          />
          <button
            type="submit"
            className="flex items-center bg-white py-0 px-4 cursor-pointer border-2 border-black"
          >
            <Image src="/add.svg" alt="add" width={14} height={14} priority />
          </button>
        </div>
      </form>
      {tickers.length ? (
        <ul>
          {tickers.map((ticker, index) => (
            <li key={`${index}-${ticker}`} className="uppercase">
              {ticker}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your tickers will appear here...</p>
      )}
      <Link
        href={
          tickers.length
            ? {
                pathname: "/report",
                query: { tickers },
              }
            : "#"
        }
        className={twJoin(
          "w-3/4 py-4 px-6 cursor-pointer border-2 border-black bg-green-400 uppercase font-medium text-center",
          !tickers.length && "opacity-50 cursor-not-allowed"
        )}
      >
        Generate Report
      </Link>
      <p className="font-neue text-sm font-bold">
        Always correct 15% of the time!
      </p>
    </section>
  );
};

export default ActionPanel;
