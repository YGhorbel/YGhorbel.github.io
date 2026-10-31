import { Link } from "react-router";
import { MdCoPresent } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { VideoCard } from "@/components/video-card";
import { talks } from "@/data/talks";

interface TalksSectionProps {
  variant?: string;
}

const TITLE = "Presentations / Talks";

export default function TalksSection({ variant = "default" }: TalksSectionProps) {
  if (variant === "card") {
    return (
      <Card className="rounded-md md:px-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
            <MdCoPresent />
            {TITLE}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TalksContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <MdCoPresent />
        {TITLE}
      </div>
      <TalksContent />
    </div>
  );
}

function TalksContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {talks.map((talk, index) => (
          <VideoCard key={index} {...talk} />
        ))}
      </div>

      <div className="relative w-full">
        <div className="absolute right-0">
          <Button asChild variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <Link to="/talks">
              View all
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
