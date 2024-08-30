import { dates } from "@/utils/dates";
import { openai } from "@/utils/openai";

const fetchStockData = async (tickers: string[]) => {
  const tickersArray = Array.isArray(tickers) ? tickers : [tickers];
  try {
    const stockData = await Promise.all(
      tickersArray.map(async (ticker) => {
        const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
        const response = await fetch(url);
        const data = await response.text();

        return data;
      })
    );
    return stockData.join("");
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching stock data");
  }
};

const fetchReport = async (stockData: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell.",
        },
        {
          role: "user",
          content: stockData,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error("Enable to access AI.");
  }
};

const ReportPage = async ({
  searchParams,
}: {
  searchParams: { tickers: string[] };
}) => {
  const stockData = await fetchStockData(searchParams.tickers);
  // TODO: update status in loading component
  const textReport = stockData ? await fetchReport(stockData) : "no data";

  return (
    <main className="flex-1">
      <p>{textReport}</p>
    </main>
  );
};

export default ReportPage;
