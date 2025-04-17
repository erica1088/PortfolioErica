import emailjs from "emailjs-com";

export const sendEmail = async (formData) => {
  const { name, email, message } = formData;

  const templateParams = {
    from_name: name,
    reply_to: email,
    message,
  };

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Verifica si las variables de entorno están disponibles
  if (!serviceID || !templateID || !publicKey) {
    console.error("Error: Las variables de entorno no están definidas correctamente.");
    return;
  }

  try {
    return await emailjs.send(serviceID, templateID, templateParams, publicKey);
  } catch (error) {
    console.error("Error al enviar el email:", error);
  }
};
