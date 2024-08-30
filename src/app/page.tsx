import TagLine from "@/components/ActionPanel/TagLine";
import ActionPanel from "../components/ActionPanel/ActionPanel";

export default function Home() {
  return (
    <>
      <main className="flex justify-center flex-1">
        <ActionPanel>
          <TagLine />
        </ActionPanel>
      </main>
    </>
  );
}
