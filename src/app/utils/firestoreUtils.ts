import { firestoreClientDB } from "../config/firestore-client";
import {
  collection,
  setDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore/lite";

const db = firestoreClientDB;

async function createCollection(collectionName: string, items: string[]) {
  const collectionRef = collection(db, collectionName);

  for (let i = 0; i < items.length; i++) {
    const docRef = doc(collectionRef, i.toString());
    await setDoc(docRef, { name: items[i] });
  }

  console.log(`Collection ${collectionName} created.`);
}

async function getCollection(collectionName: string) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => doc.data());
  return data;
}


async function updateCollection(collectionName: string, id: string, name: string) {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef, id);
  await updateDoc(docRef, { name });
  console.log(`Document ${id} updated.`);
}

export { createCollection, getCollection, updateCollection };