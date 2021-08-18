// build all method with firebase.

import firebase,{ db } from "./config";

export const addDocument = (collectionName, data,done) => {
  const query = db.collection(collectionName);
  query.add({
    ...data,
    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
  }).then(() => {
    done && done();
  })
    .catch(err => {
      console.log(err);
  })
}

export const getDocument = (collectionName, data) => {
  const query = db.collection(collectionName);
  console.log(query.add);
}