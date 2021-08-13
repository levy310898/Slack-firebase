// build all method with firebase.

import firebase,{ db } from "./config";

export const addDocument = (collectionName, data) => {
  const query = db.collection(collectionName);
  query.add({
    ...data,
    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
  })
}