
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; 

export const sendMessage = async (formData) => {
  try {
    await addDoc(collection(db, "messages"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error al enviar el mensaje: ", error);
    throw error;
  }


}
