import { vtubers } from "@/data/vtubers";
import React from "react";
import { VTuberAvatar } from "../components/VTuberAvatar";
import Link from "next/link";

function MiniCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[.92] p-4 px-8 shadow-lg">
      {children}
    </div>
  );
}

export default function VTuber({ params }: { params: { id: string } }) {
  return (
    <div className="w-7/12">
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg">
          <text
            className={`svg-text-outline`}
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            index
          </text>
        </svg>
      </div>
      <div className="flex flex-wrap items-start justify-stretch gap-4">
        {vtubers.map((vtuber) => (
          <Link href={`/vtubers/${vtuber.id}`} key={vtuber.id}>
            <MiniCard>
              <VTuberAvatar vtuber={vtuber} />
              <div className="">
                <h2 className="text-lg text-black">{vtuber.name}</h2>
                <h3 className="text-sm text-gray-500">{vtuber.org}</h3>
              </div>
            </MiniCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
