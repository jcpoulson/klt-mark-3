// This is for moving all the data from a level, to the new DB structure

import { db } from "./firebase";
import { doc, getDoc, addDoc, collection } from "firebase/firestore"

const docRef = doc(db, "levels", "1"); // Hard coded level, make sure to change before running function
const docSnap = await getDoc(docRef);

const allSayings = docSnap.data().sayings;

async function addSaying(english, korean, level) {
    try {
      const docRef = await addDoc(collection(db, "legacyData"), {
        english: english,
        korean: korean,
        level: level
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

async function performMigration() {
    allSayings.forEach(saying => {
        addSaying(saying.english, saying.korean, saying.level)
    })
}

export {
    performMigration
}