import { redirect } from "next/navigation";
import { getVTuber } from "./getVtuber";
import { vtubers } from "@/data/vtubers";

export function generateStaticParams() {
  return vtubers.map((vtuber) => ({
    id: String(vtuber.id),
  }));
}

export function GET(request: Request, { params }: { params: { id: string } }) {
  const slug = getVTuber(params.id)!.slug;
  redirect(`${params.id}/${slug}`);
}
