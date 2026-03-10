import HorizontalLine from "@/app/components/line/horizontal-line";
import { Note } from "@/app/types";
import { formatDate } from "@/app/utils/dateFormat";
import Link from "next/link";

const Item = ({ note }: { note: Note }) => {
  return (
    <Link href={`/notes/${note.id}`} className="flex flex-col gap-3 p-2 cursor-pointer">
      <h3 className="text-preset-3 text-Neutral-950 dark:text-white">{note.title}</h3>
      <div className="flex gap-1">
        {note.tags.map((tag, i) => (
          <span
            key={i}
            className="text-preset-6 text-Neutral-950 dark:text-white radius-4 px-1.5 py-0.5 bg-Neutral-200 dark:bg-Neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-Neutral-700 dark:text-Neutral-300 text-preset-6 mb-1">
        {formatDate(note.createdAt)}
      </span>

      <HorizontalLine />
    </Link>
  );
};

export default Item;
