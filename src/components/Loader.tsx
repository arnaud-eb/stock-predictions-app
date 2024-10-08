import Image from "next/image";

export default function Loader({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-around text-center flex-1">
      <Image
        src="/loader.svg"
        alt="loading"
        width={200}
        height={200}
        priority
      />
      <div>{text}</div>
    </div>
  );
}
