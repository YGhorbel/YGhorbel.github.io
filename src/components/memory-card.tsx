import { useState } from "react";
import { FaRegCalendar, FaLinkedin } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

export type Memory = (typeof posts.items)[number];

// every card has the same fixed layout; the description scrolls inside its box
export function MemoryCard({ post }: { post: Memory }) {
  const [current, setCurrent] = useState(0);
  const images = post.images ?? [];

  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full h-full">
      <div className="bg-muted">
        <div className="aspect-4/3 w-full overflow-hidden">
          {images.length > 0 && (
            <img
              src={images[current]}
              alt={`${post.title} (${current + 1} of ${images.length})`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* reserved height so cards with a single image stay the same size */}
        <div className="flex flex-row gap-1.5 p-1.5 overflow-x-auto h-13">
          {images.length > 1 &&
            images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show image ${i + 1}`}
                className={`w-10 h-10 shrink-0 overflow-hidden rounded-sm border-2 cursor-pointer ${
                  i === current ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
        </div>
      </div>

      <div className="w-full border-t" />

      <div className="flex flex-col p-3 gap-2 flex-1">
        <div className="text-base font-semibold leading-snug line-clamp-2 h-11">{post.title}</div>

        <p className="flex flex-row items-center gap-1 text-xs text-muted-foreground h-4">
          {post.date && (
            <>
              <FaRegCalendar />
              {post.date}
            </>
          )}
        </p>

        <p className="text-xs whitespace-pre-line leading-relaxed text-muted-foreground h-24 overflow-y-auto pr-1">
          {post.description}
        </p>

        <div className="flex flex-row items-center justify-end pt-1 mt-auto">
          {post.link && (
            <Button asChild variant="outline" size="sm" className="gap-1.5 h-7 text-xs">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                LinkedIn
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
