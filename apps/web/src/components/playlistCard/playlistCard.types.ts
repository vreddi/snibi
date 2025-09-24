import type { VideoListItemProps } from "./components/videoListItem/videoListItem.types";

export type PlaylistCardProps = {
  /**
   * The title of the playlist
   */
  title: string;

  /**
   * The description of the playlist
   */
  description: string;

  /**
   * The background image of the playlist card
   */
  backgroundImage?: string;

  videos: VideoListItemProps[];
};
