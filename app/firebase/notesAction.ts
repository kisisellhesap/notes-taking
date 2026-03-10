import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from ".";
import { Note } from "../types";

export const getNotes = (callback: (notes: Note[]) => void) => {
  const q = query(collection(db, "notes"));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const notesTemp: Note[] = [];
    querySnapshot.forEach((doc) => {
      notesTemp.push({ id: doc.id, ...doc.data() } as Note);
    });
    callback(notesTemp);
  });

  return unsubscribe;
};
