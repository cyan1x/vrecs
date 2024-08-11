import { redirect } from "next/navigation";
import { getVTuber, getVTuberSlug } from "./getVtuber";
import { vtubers } from "@/data/vtubers";

export function generateStaticParams() {
  return vtubers.map((vtuber) => ({
    id: String(vtuber.id),
  }));
}

export function GET(request: Request, { params }: { params: { id: string } }) {
  const slug = getVTuberSlug(getVTuber(params.id)!);
  redirect(`${params.id}/${slug}`);
}
