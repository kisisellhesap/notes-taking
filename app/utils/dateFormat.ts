import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";

export const formatDate = (timestamp: Timestamp) => {
  return format(timestamp.toDate(), "dd MMM yyyy");
};
