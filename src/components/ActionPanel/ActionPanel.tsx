"use client";

import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Form from "./Form";
import TickersList from "./TickersList";

interface ActionPanelProps {
  children: ReactNode;
}

const ActionPanel: FC<ActionPanelProps> = ({ children }) => {
  const [tickers, setTickers] = useState<string[]>([]);

  return (
    <section className="flex flex-col justify-evenly items-center mx-8 leading-6">
      <Form setTickers={setTickers} />
      <TickersList tickers={tickers} />
      <Link
        href={
          tickers.length
            ? {
                pathname: "/report",
                query: { tickers },
              }
            : "#"
        }
        className={twMerge(
          "w-3/4 py-4 px-6 cursor-pointer border-2 border-black bg-green-400 uppercase font-medium text-center",
          !tickers.length && "opacity-50 cursor-not-allowed"
        )}
      >
        Generate Report
      </Link>
      {children}
    </section>
  );
};

export default ActionPanel;
