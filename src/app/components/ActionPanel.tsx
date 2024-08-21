"use client";

import Image from "next/image";
import { FC, useState } from "react";

const ActionPanel: FC = () => {
  const [ticker, setTicker] = useState("");
  const [tickers, setTickers] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTicker = ticker.trim();
    if (trimmedTicker) {
      setTickers([...tickers, ticker]);
      setTicker("");
    }
  };

  return (
    <section className="flex flex-col justify-around items-center my-6 mx-8 h-80 leading-6">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-96">
        <label className="text-center p-2 text-base mb-4 w-4/5">
          Add up to 3 stock tickers below to get a super accurate stock
          predictions report👇
        </label>
        <div className="flex w-3/4">
          <input
            type="text"
            id="ticker-input"
            placeholder="MSFT"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            required
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
      <div>
        {tickers.length ? (
          tickers.map((ticker, index) => (
            <p key={`${index}-${ticker}`}>{ticker}</p>
          ))
        ) : (
          <p>Your tickers will appear here...</p>
        )}
      </div>
      <button
        type="button"
        aria-disabled
        className="w-3/4 py-4 px-6 cursor-pointer border-2 border-black bg-green-400 uppercase font-medium"
      >
        Generate Report
      </button>
      <p className="font-neue text-sm font-bold">
        Always correct 15% of the time!
      </p>
    </section>
  );
};

export default ActionPanel;
