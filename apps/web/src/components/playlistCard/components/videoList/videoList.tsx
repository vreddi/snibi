import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { memo } from "react";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import type { VideoListProps } from "./videoList.types";
import { VideoListItem } from "../videoListItem/videoListItem";

export const VideoList: React.FC<VideoListProps> = memo((props) => {
  const table = useReactTable({
    data: props.videos,
    columns: [{ accessorKey: "title", header: "Title" }],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-full w-full overflow-x-hidden rounded-br-lg rounded-bl-lg bg-gray-800/90 px-3 py-1 text-white backdrop-blur-[2px]">
      <Table className="w-full table-fixed">
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="overflow-hidden">
                  <VideoListItem
                    title={row.original.title}
                    channel={row.original.channel}
                    image={row.original.image}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

VideoList.displayName = "VideoList";
