import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-around text-center flex-1">
      <Image
        src="/loader.svg"
        alt="loading"
        width={200}
        height={200}
        priority
      />
      <div>Querying Stocks API...</div>
    </div>
  );
}
