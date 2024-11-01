import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// const postSaying = async (postBody, level) => {
//     // level should be a string
//     const selectedLevel = doc(db, "levels", level);
  
//     await updateDoc(selectedLevel, {
//         sayings: arrayUnion(postBody)
//     })
// }

/* 
  {
    english: string,
    korean: string,
    level
  }
*/

async function postSaying(postBody) {
    const levelMetaDataRef = doc(db, "metaData", `level-${postBody.level}`);
    const docSnap = await getDoc(levelMetaDataRef);

    const docData = docSnap.data();
    const sayingCount = docData.sayingCount;

    try {
      const docRef = await addDoc(collection(db, `level-${postBody.level}`), {
        english: postBody.english,
        korean: postBody.korean,
        countID: sayingCount + 1,
      });
      console.log("Document written with ID: ", docRef.id);

      const updateMetaData = await updateDoc(levelMetaDataRef, {
        sayingCount: sayingCount + 1
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


export default postSaying;