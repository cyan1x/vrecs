import Link from "next/link";
import { Card } from "./components/Card";
import { vtubers } from "@/data/vtubers";

export default function RootPage() {
  const randomVtuber = Math.floor(Math.random() * vtubers.length);

  return (
    <Card>
      <div className="flex flex-col gap-0.5 text-center">
        <h1 className="pb-3">
          Welcome to{" "}
          <span className="whitespace-nowrap bg-slate-200 p-1.5 py-0.5 font-medium">
            VRecs
          </span>
          .
        </h1>
        <Link href={`/${randomVtuber}`}>→ Random VTuber</Link>
        <Link href="/about">→ About</Link>
      </div>
    </Card>
  );
}
