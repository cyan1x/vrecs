import { VTuber, vtubers } from "@/data/vtubers";

export function getVTuber(id: number | string) {
  return vtubers.find((vtuber) => vtuber.id === Number(id));
}

export function getVTuberSlug(vtuber: VTuber) {
  return vtuber.name.toLowerCase().split(" ").join("-");
}
