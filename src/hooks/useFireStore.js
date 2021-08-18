import React,{useEffect,useState} from 'react';
import { db } from 'Firebase/config';

export default function useFireStore(collection,condition) {
  const [documents, setDocuments] = useState([]);
  
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createdAt');

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef.where(condition.fieldName,condition.operator,condition.compareValue)
    }

    const unSubcribes = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id,
      }))
      setDocuments(documents);

    })

    return unSubcribes;
  },[collection,condition])
  
  return documents
}
