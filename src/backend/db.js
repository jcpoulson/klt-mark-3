import { query, collection, orderBy, startAt, limit, getDocs, endAt, where } from "firebase/firestore";
import { db } from "./firebase";

// const getRandomSaying = async (levelNumber) => {
//   const docRef = doc(db, "levels", levelNumber);
//   const docSnap = await getDoc(docRef);

//   const sayings = docSnap.data().sayings;
//   let randomSaying = sayings[Math.floor(Math.random() * sayings.length)];
//   return randomSaying
// }


async function getRandomSaying(level) {
  try {
    // Generate a random value for the starting point
    const randomValue = Math.random();

    // Fetch 10 documents starting at a random point
    const q = query(
      collection(db, "sayings"),
      limit(10),
      orderBy("english"), // Order by some field (e.g., 'text')
      startAt(randomValue),
      where("level", "==", level)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const sayings = querySnapshot.docs.map((doc) => doc.data());

      // Generate a random index within the fetched sayings
      const randomIndex = Math.floor(Math.random() * sayings.length);
      const randomSaying = sayings[randomIndex];

      // console.log("Random saying:", randomSaying);
      return randomSaying
    } else {
      // If no documents are found after the random starting point, try again from the beginning
      const q = query(
        collection(db, "sayings"),
        limit(10),
        orderBy("english"),
        endAt(randomValue),
        where("level", "==", level)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const sayings = querySnapshot.docs.map((doc) => doc.data());

        // Generate a random index within the fetched sayings
        const randomIndex = Math.floor(Math.random() * sayings.length);
        const randomSaying = sayings[randomIndex];

        return randomSaying
      } else {
        console.log("No sayings found.");
      }
    }
  } catch (error) {
    console.error("Error getting random saying:", error);
  }
}



export default getRandomSaying;
