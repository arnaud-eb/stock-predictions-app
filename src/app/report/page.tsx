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
  const report = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: "how are you today?",
      },
    ],
  });
};

const ReportPage = async ({
  searchParams,
}: {
  searchParams: { tickers: string[] };
}) => {
  const stockData = await fetchStockData(searchParams.tickers);
  // TODO: update status in loading component

  if (stockData) {
    fetchReport(stockData);
  }

  return (
    <div className="flex-1">
      <h1>Report Page</h1>
      {/* Add your report content here */}
    </div>
  );
};

export default ReportPage;
