import { query, collection, limit, getDocs, doc, where, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// const getRandomSaying = async (levelNumber) => {
//   const docRef = doc(db, "levels", levelNumber);
//   const docSnap = await getDoc(docRef);

//   const sayings = docSnap.data().sayings;
//   let randomSaying = sayings[Math.floor(Math.random() * sayings.length)];
//   return randomSaying
// }


// async function getRandomSaying(level) {
//   try {
//     // First Query 
//     const randomValue1 = Math.random(); // Generate random value for the first query

//     const q1 = query(
//       collection(db, "sayings"),
//       limit(1),
//       orderBy("english"), 
//       startAt(randomValue1), // Use the first random value
//       where("level", "==", level)
//     );
//     const querySnapshot1 = await getDocs(q1);

//     if (!querySnapshot1.empty) {
//       const sayings = querySnapshot1.docs.map((doc) => doc.data());

//       // Generate a random index within the fetched sayings
//       const randomIndex = Math.floor(Math.random() * sayings.length);
//       const randomSaying = sayings[randomIndex];

//       // console.log("Random saying:", randomSaying);
//       return randomSaying
//     } else {
//       // Second Query (if the first query returns empty)
//       const randomValue2 = Math.random(); // Generate a *new* random value for the second query

//       const q2 = query(
//         collection(db, "sayings"),
//         limit(1),
//         orderBy("english"),
//         endAt(randomValue2), // Use the second random value
//         where("level", "==", level)
//       );
//       const querySnapshot2 = await getDocs(q2);

//       if (!querySnapshot2.empty) {
//         const sayings = querySnapshot2.docs.map((doc) => doc.data());

//         // Generate a random index within the fetched sayings
//         const randomIndex = Math.floor(Math.random() * sayings.length);
//         const randomSaying = sayings[randomIndex];

//         return randomSaying
//       } else {
//         console.log("No sayings found.");
//       }
//     }
//   } catch (error) {
//     console.error("Error getting random saying:", error);
//   }
// }

async function getRandomSaying(level) {
  try {
    const levelMetaDataRef = doc(db, "metaData", `level-${level}`);
    const docSnap = await getDoc(levelMetaDataRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      const sayingCount = docData.sayingCount;

      const randNum = Math.floor(Math.random() * sayingCount);;

      const q = query(
        collection(db, `level-${level}`),
        limit(1), 
        where("countID", "==", randNum)
      );
  
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const randomSaying = querySnapshot.docs[0].data(); 
        return randomSaying;
      } else {
        console.log("No sayings found.");
      } 
    }
  } catch (error) {
    console.error("Error getting random saying:", error);
  }
}



export default getRandomSaying;
