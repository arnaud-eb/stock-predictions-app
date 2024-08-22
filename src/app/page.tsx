import ActionPanel from "../components/ActionPanel";
import Loader from "../components/Loader";
import OutputPanel from "../components/OutputPanel";

export default function Home() {
  return (
    <>
      <main className="flex justify-center">
        <ActionPanel />
        <Loader />
        <OutputPanel />
      </main>
    </>
  );
}
