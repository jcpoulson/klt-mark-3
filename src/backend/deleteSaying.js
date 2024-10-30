import { arrayRemove, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// const deleteSaying = async (postBody) => {
//     // level should be a string
//     const selectedLevel = doc(db, "levels", postBody.level.toString());

//     // Atomically remove a region from the "regions" array field.
//     await updateDoc(selectedLevel, {
//         sayings: arrayRemove(postBody)
//     });
// }

async function deleteSaying(postBody) {
    console.log(postBody);
    
    try {
      await deleteDoc(doc(db, "sayings", sayingId));
      console.log("Document with ID", sayingId, "deleted successfully!");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }


export default deleteSaying;