import { Link } from "react-router";
import { FaRegImages, FaArrowRight } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { MemoryCard } from "@/components/memory-card";
import { posts } from "@/data/posts";

// number of memories shown on the About Me page (the rest are on /memories)
const FEATURED_COUNT = 3;

export default function MemoriesSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaRegImages />
        Memories
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.items.slice(0, FEATURED_COUNT).map((post, index) => (
          <MemoryCard key={index} post={post} />
        ))}
      </div>

      <div className="relative w-full">
        <div className="absolute right-0">
          <Button asChild variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <Link to="/memories">
              View all
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
