import Form from "./components/Form";
import Loader from "./components/Loader";
import Output from "./components/Output";

export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <Form />
        <Loader />
        <Output />
      </main>
    </>
  );
}
