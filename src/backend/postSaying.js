import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

// const postSaying = async (postBody, level) => {
//     // level should be a string
//     const selectedLevel = doc(db, "levels", level);
  
//     await updateDoc(selectedLevel, {
//         sayings: arrayUnion(postBody)
//     })
// }

async function postSaying(postBody) {
    try {
      const docRef = await addDoc(collection(db, "sayings"), {
        english: postBody.english,
        korean: postBody.korean,
        level: parseInt(postBody.level),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


export default postSaying;