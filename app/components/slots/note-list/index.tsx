"use client";
import Link from "next/link";
import { PlusIcon } from "../../icons/icons";
import { Note } from "@/app/types";
import Item from "./item";
import { useEffect, useState } from "react";
import { getNotes } from "@/app/firebase/notesAction";

const NoteList = () => {
  console.log(" @notes > notes > page.tsx");
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const unsubscribe = getNotes((notes) => {
      setNotes(notes);
    });

    return () => unsubscribe();
  }, []);

  console.log("notes: ", notes);

  return (
    <div className="flex flex-col gap-4 relative h-full">
      <h1 className="text-preset-1 text-Neutral-950 dark:text-white lg:hidden">All Notes</h1>
      <div className="flex flex-col gap-4">
        <Link
          href={"/notes/create-new-note"}
          className=" flex items-center justify-center radius-full  w-8 h-8 fixed right-8 bottom-20 md:right-12 md:bottom-24 lg:static lg:w-full lg:h-auto lg:px-4 lg:py-3 lg:rounded-lg bg-Blue-500 text-white cursor-pointer"
        >
          <span className="text-preset-4 hidden lg:block">+ Create New Note</span>
          <PlusIcon className="lg:hidden" />
        </Link>

        {/* <p className="bg-Neutral-100 dark:bg-Neutral-800 dark:border-Neutral-700 dark:text-white border border-Neutral-200 p-2 radius-8 text-preset-5 text-Neutral-950">
          No notes have been archived yet. Move notes here for safekeeping, or {""}
          <Link href="/notes/create" className="underline">
            create a new note
          </Link>
        </p> */}

        <p className="bg-Neutral-100 dark:bg-Neutral-800 dark:border-Neutral-700 dark:text-white border border-Neutral-200 p-2 radius-8 text-preset-5 text-Neutral-950">
          You don’t have any notes yet. Start a new note to capture your thoughts and ideas.
        </p>
      </div>

      <div className="flex flex-col gap-0">
        {notes.map((note) => (
          <Item key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;

// <div className="flex flex-col gap-4 relative h-full">
//   <h1 className="text-preset-1 text-Neutral-950 lg:hidden">Archived Notes</h1>
//   <div className="flex flex-col gap-4">
//     <button className=" flex items-center justify-center radius-full  w-8 h-8 absolute right-0 bottom-0 lg:static lg:w-full lg:h-auto lg:px-4 lg:py-3 lg:rounded-lg bg-Blue-500 text-white cursor-pointer">
//       <span className="text-preset-4 hidden lg:block">+ Create New Note</span>
//       <PlusIcon className="lg:hidden" />
//     </button>

//     <div className="flex flex-col gap-4">
//       <p className="text-preset-5 text-Neutral-700">
//         All your archived notes are stored here. You can restore or delete them anytime.
//       </p>
//
//     </div>
//   </div>
// </div>
