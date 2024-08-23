import { dates } from "@/utils/dates";

const fetchStockData = async (tickers: string[]) => {
  try {
    const stockData = await Promise.all(
      tickers.map(async (ticker) => {
        const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
        const response = await fetch(url);
        const data = await response.text();
        return data;
      })
    );
    return stockData.join("");
  } catch (error) {
    console.error("error: ", error);
  }
};

const fetchReport = async (stockData: string) => {};

const ReportPage = async ({
  searchParams,
}: {
  searchParams: { tickers: string[] };
}) => {
  const stockData = await fetchStockData(searchParams.tickers);
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
