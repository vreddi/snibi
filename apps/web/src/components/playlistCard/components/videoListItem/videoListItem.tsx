import { memo } from "react";
// import Image from "next/image";
import type { VideoListItemProps } from "./videoListItem.types";

export const VideoListItem: React.FC<VideoListItemProps> = memo((props) => {
  return (
    <div className="flex gap-2">
      <img
        src={props.image}
        alt={props.title}
        className="h-10 w-10 rounded-md object-cover object-center"
        width={40}
        height={40}
      />
      <div className="flex min-w-0 flex-col">
        <div className="group relative max-w-full overflow-hidden">
          {/* Static (ellipsized) title */}
          <span className="block truncate text-sm font-bold transition-opacity group-hover:opacity-0">
            {props.title}
          </span>
          {/* Animated marquee title (shown on hover) */}
          <span className="animate-marquee pointer-events-none absolute inset-0 hidden text-sm font-bold whitespace-nowrap group-hover:block">
            {props.title}
          </span>
        </div>
        <span className="truncate text-xs text-gray-400">{props.channel}</span>
      </div>
    </div>
  );
});

VideoListItem.displayName = "VideoListItem";
