// This is for moving all the data from a level, to the new DB structure

import { db } from "./firebase";
import { doc, getDoc, getDocs, addDoc, collection, query, where } from "firebase/firestore"

const docRef = doc(db, "levels", "1"); // Hard coded level, make sure to change before running function
const docSnap = await getDoc(docRef);

// const allSayings = docSnap.data().sayings;
const q = query(
  collection(db, "sayings"), 
  where("level", "==", 3),
);

async function testConnection() {
  // console.log(q);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc => console.log(doc.data()));
}

async function addSaying(english, korean, index) {
    try {
      const docRef = await addDoc(collection(db, "level-3"), {
        english: english,
        korean: korean,
        countID: index
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

async function performMigration() {
    const querySnapshot = await getDocs(q);

    let index = 0;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      addSaying(data.english, data.korean, index);
      index++
    })
}

export {
    performMigration, 
    testConnection
}