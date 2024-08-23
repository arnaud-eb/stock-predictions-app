import ActionPanel from "../components/ActionPanel";
import OutputPanel from "../components/OutputPanel";

export default function Home() {
  return (
    <>
      <main className="flex justify-center flex-1">
        <ActionPanel />
        <OutputPanel />
      </main>
    </>
  );
}
