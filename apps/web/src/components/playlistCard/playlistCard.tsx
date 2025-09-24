"use client";

import { memo } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { PlaylistCardProps } from "./playlistCard.types";
import { VideoList } from "./components/videoList";

export const PlaylistCard: React.FC<PlaylistCardProps> = memo((props) => {
  return (
    <Card
      className="flex h-96 max-h-96 min-w-sm flex-col justify-end gap-1 overflow-hidden bg-cover bg-center bg-no-repeat pb-0"
      style={{
        backgroundImage: `url('${props.backgroundImage}')`,
      }}
    >
      <CardHeader className="pr-2 pl-2">
        <CardTitle className="fit-content text-md inline-block w-fit rounded-lg bg-gray-800/60 px-3 py-1 font-medium text-white backdrop-blur-[2px]">
          {props.title}
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>

      <CardFooter className="flex h-fit flex-col justify-end rounded-br-lg rounded-bl-lg pr-2 pb-2 pl-2">
        <VideoList videos={props.videos} />
      </CardFooter>
    </Card>
  );
});

PlaylistCard.displayName = "PlaylistCard";
