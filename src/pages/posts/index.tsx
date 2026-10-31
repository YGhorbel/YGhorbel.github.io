import { FaRegImages } from "react-icons/fa6";

import { MemoryCard } from "@/components/memory-card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { posts } from "@/data/posts";

export default function MemoriesPage() {
  usePageTitle("Memories");

  return (
    <div className="flex flex-1 flex-col items-center gap-8">
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-row justify-center items-center gap-3 text-3xl font-semibold">
          <FaRegImages />
          Memories
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-2 sm:px-6">
          {posts.items.map((post, index) => (
            <MemoryCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
