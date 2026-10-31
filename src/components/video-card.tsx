import { useState } from "react";
import { FaPlay, FaRegCalendar } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Card } from "@/components/ui/card";

export interface VideoCardProps {
  title: string;
  organization?: string | null;
  date?: string | null;
  link?: string | null;
  image?: string | null;
  // set to false for videos whose owner blocks embedded playback
  embed?: boolean;
}

function getYouTubeId(url?: string | null) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export function VideoCard({ title, organization, date, link, image, embed = true }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(link);
  const thumbnail = image ?? (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null);

  const handlePlay = () => {
    if (videoId && embed) setPlaying(true);
    else if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full flex flex-col h-full">
      <div className="relative aspect-video w-full bg-muted">
        {playing && videoId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            {thumbnail && <img src={thumbnail} alt={title} className="w-full h-full object-cover" loading="lazy" />}
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <FaPlay className="ml-1" />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="w-full border-t" />

      <div className="flex flex-col flex-grow py-3 px-4 gap-y-2">
        <div className="text-base font-semibold line-clamp-2">{title}</div>

        <div className="flex flex-row items-center justify-between gap-2 text-sm text-muted-foreground mt-auto pt-1">
          <div className="flex flex-col gap-0.5">
            {organization && <span>{organization}</span>}
            {date && (
              <span className="flex flex-row items-center gap-1">
                <FaRegCalendar />
                {date}
              </span>
            )}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
              title="Watch on YouTube"
              className="hover:text-foreground shrink-0"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
