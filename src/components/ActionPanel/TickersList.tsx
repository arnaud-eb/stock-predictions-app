import { FC } from "react";

interface TickersListProps {
  tickers: string[];
}

const TickersList: FC<TickersListProps> = ({ tickers }) => {
  return (
    <>
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
    </>
  );
};

export default TickersList;
