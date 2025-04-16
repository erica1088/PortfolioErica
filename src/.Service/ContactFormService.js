import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export const sendMessage = async (formData) => {
  const messagesRef = collection(db, 'messages');
  await addDoc(messagesRef, formData);
};