import { vtubers } from "@/data/vtubers";
import React from "react";
import { Card } from "../../components/Card";
import Link from "next/link";
import { Metadata } from "next";
import { getVTuber } from "../getVtuber";
import { VTuberAvatar } from "@/app/components/VTuberAvatar";
import { YouTubeEmbeds } from "./YouTubeEmbeds";

export function generateStaticParams() {
  return vtubers.map((vtuber) => ({
    id: String(vtuber.id),
    slug: vtuber.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const vtuber = getVTuber(params.id)!;
  return {
    title: `${vtuber.name} | VRecs`,
    // OpenGraph
    openGraph: {
      images: [`${process.env.HOST_URL}${vtuber.imgName}`],
      title: vtuber.name,
      type: "website",
    },
  };
}

export default function VTuber({ params }: { params: { id: string } }) {
  const vtuber = getVTuber(params.id);

  if (!vtuber) {
    return (
      <Card>
        <p>Unknown VTuber id {params.id}</p>
        <p className="mt-3 text-center">
          <Link href="/">→ Home</Link>
        </p>
      </Card>
    );
  }

  const genres = Object.entries(vtuber.genres).map(
    ([genre, frequency], index) => {
      const colors: Record<typeof frequency, string> = {
        frequent: "text-green-400",
        infrequent: "text-orange-400/90",
        rare: "text-purple-400",
      };

      return (
        <React.Fragment key={index}>
          {index > 0 && <span className="px-1 text-sm text-gray-300"> | </span>}
          <span className={colors[frequency]}>{genre}</span>
        </React.Fragment>
      );
    },
  );

  const links = Object.entries(vtuber.links).map(([website, link], index) => {
    const colors: Record<typeof website, string> = {
      youtube: "text-red-400",
      twitch: "text-purple-600",
      twitter: "text-sky-400",
    };

    return (
      <React.Fragment key={index}>
        {index > 0 && <span className="px-1 text-sm text-gray-300"> | </span>}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative mr-3 after:absolute after:-right-3 after:-top-1 after:text-sm after:content-['↗'] ${colors[website]}`}
        >
          {website}
        </a>
      </React.Fragment>
    );
  });

  return (
    <Card>
      <div className="grid w-full grid-cols-vtubercard-mobile gap-1.5 gap-x-3 grid-areas-vtubercard-mobile md:w-[36rem] md:grid-cols-vtubercard md:grid-areas-vtubercard">
        <div className="flex items-center justify-center grid-in-image">
          <VTuberAvatar vtuber={vtuber} />
        </div>

        <div className="p-3 pl-4 grid-in-info">
          <div className="pb-3 text-xl">
            <h2>{vtuber.name}</h2>
            <h3 className="text-sm text-gray-500">{vtuber.org}</h3>
          </div>

          <div>{vtuber.description}</div>
        </div>

        <div className="grid-in-genres">
          <h3 className="text-sm text-gray-500">Genres:</h3>
          {genres}
        </div>

        <div className="grid-in-links">
          <h3 className="text-sm text-gray-500">Links:</h3>
          {links}
        </div>

        <YouTubeEmbeds vtuber={vtuber} />
      </div>
    </Card>
  );
}
