import { MdCoPresent } from "react-icons/md";

import { VideoCard } from "@/components/video-card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { talks } from "@/data/talks";

export default function TalksPage() {
  usePageTitle("Talks");

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
          <MdCoPresent />
          Talks
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-2 sm:px-6">
          {talks.map((talk, index) => (
            <VideoCard key={index} {...talk} />
          ))}
        </div>
      </div>
    </div>
  );
}
