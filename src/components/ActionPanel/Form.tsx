import Image from "next/image";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";

interface FormProps {
  setTickers: Dispatch<SetStateAction<string[]>>;
}

const Form: FC<FormProps> = ({ setTickers }) => {
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target as HTMLFormElement);
    const ticker = formData.get("ticker-input")?.toString().trim();

    if (ticker && ticker.length > 2) {
      formRef.current?.reset();
      setTickers((tickers) => [...tickers, ticker.toUpperCase()]);
    } else {
      setError(
        "You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla."
      );
    }
  };

  return (
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
  );
};

export default Form;
