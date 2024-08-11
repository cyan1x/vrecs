import { vtubers } from "@/data/vtubers";
import React from "react";
import { Card } from "../../../components/Card";
import Link from "next/link";
import { Metadata } from "next";
import { getVTuber, getVTuberSlug } from "../getVtuber";

export function generateStaticParams() {
  return vtubers.map((vtuber) => ({
    id: String(vtuber.id),
    slug: getVTuberSlug(vtuber),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  return {
    title: `${getVTuber(params.id)?.name} | VRecs`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
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

  const toEmbed = (url: string) => (
    <iframe
      key={url}
      className="block max-w-full"
      width="480"
      height="360"
      src={url}
      title="YouTube video player"
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );

  return (
    <Card>
      <div className="grid w-[36rem] grid-cols-vtubercard gap-2 grid-areas-vtubercard">
        <div className="flex items-center justify-center grid-in-image">
          <div className="rounded-[50%] border-[3.5px] border-double border-[transparent] bg-[linear-gradient(170deg,_rgba(223,_249,_255,_0.95),_rgba(236,_227,_250,_0.95)),_radial-gradient(circle_farthest-corner_at_0.2%_0.5%,_rgba(123,_11,_208,_0.3)_3.7%,_rgba(54,_214,_235,_0.4)_92.7%)] bg-origin-border">
            <div
              style={
                {
                  backgroundImage: `url(/${vtuber.imgName})`,
                } as React.CSSProperties
              }
              className={`box-content max-h-full min-h-[7.5rem] min-w-[7.5rem] max-w-[7.5rem] rounded-[50%] bg-contain bg-[center_center] bg-no-repeat`}
            ></div>
          </div>
        </div>

        <div className="p-3 pl-4 grid-in-info">
          <div className="pb-3 text-xl">
            <h2>{vtuber.name}</h2>
            <h3 className="text-sm text-gray-500">{vtuber.org}</h3>
          </div>

          <div className="desc">{vtuber.description}</div>
        </div>

        <div className="grid-in-genres">
          <h3 className="text-sm text-gray-500">Genres:</h3>
          {genres}
        </div>

        <div className="grid-in-links">
          <h3 className="text-sm text-gray-500">Links:</h3>
          {links}
        </div>

        {vtuber.youtube && (
          <div className="grid-in-video mt-2 justify-center">
            {vtuber.youtube.songs && (
              <>
                <h3 className="text-sm text-gray-500">Songs:</h3>
                <div className="flex flex-col items-center p-4">
                  {vtuber.youtube?.songs?.map((song) => toEmbed(song))}
                </div>
              </>
            )}
            {vtuber.youtube.videos && (
              <>
                <h3 className="text-sm text-gray-500">Videos:</h3>
                <div className="flex flex-col items-center p-4">
                  {vtuber.youtube?.videos?.map((video) => toEmbed(video))}
                </div>
              </>
            )}
            {vtuber.youtube.streams && (
              <>
                <h3 className="text-sm text-gray-500">Streams:</h3>
                <div className="flex flex-col items-center p-4">
                  {vtuber.youtube?.streams?.map((stream) => toEmbed(stream))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
