import { vtubers } from "@/data/vtubers";

export function getVTuber(id: number | string) {
  return vtubers.find((vtuber) => vtuber.id === Number(id));
}
