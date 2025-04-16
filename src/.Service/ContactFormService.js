
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; 

export const sendMessage = async (formData) => {
  const messagesRef = collection(db, 'messages');
  await addDoc(messagesRef, formData);
};
  try {
    await addDoc(collection(db, "messages"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error al enviar el mensaje: ", error);
    throw error;
  }


