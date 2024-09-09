import { VTuber } from "@/data/vtubers";

const YouTubeEmbed = ({ url }: { url: string }) => (
  <div className="m-1 overflow-hidden rounded-lg shadow-md">
    <iframe
      // key={url}
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
  </div>
);

export const YouTubeEmbeds = ({ vtuber }: { vtuber: VTuber }) => {
  return (
    vtuber.youtube && (
      <div className="mt-2 justify-center grid-in-video">
        {vtuber.youtube.songs && (
          <>
            <h3 className="text-sm text-gray-500">Songs:</h3>
            <div className="flex flex-col items-center p-4">
              {vtuber.youtube?.songs?.map((url) => (
                <YouTubeEmbed url={url} key={url} />
              ))}
            </div>
          </>
        )}
        {vtuber.youtube.videos && (
          <>
            <h3 className="text-sm text-gray-500">Videos:</h3>
            <div className="flex flex-col items-center p-4">
              {vtuber.youtube?.videos?.map((url) => (
                <YouTubeEmbed url={url} key={url} />
              ))}
            </div>
          </>
        )}
        {vtuber.youtube.streams && (
          <>
            <h3 className="text-sm text-gray-500">Streams:</h3>
            <div className="flex flex-col items-center p-4">
              {vtuber.youtube?.streams?.map((url) => (
                <YouTubeEmbed url={url} key={url} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  );
};
