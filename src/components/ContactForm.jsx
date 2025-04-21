import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Stack,
  FormErrorMessage,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionFormControl = motion(FormControl);

const ContactForm = () => {
  const form = useRef();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const isInvalid = (field) => touched[field] && formData[field].trim() === "";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validar campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completá todos los campos.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // Verificar si las variables están bien definidas
    if (!serviceID || !templateID || !publicKey) {
      console.log("Env");
      console.error("Faltan variables de entorno:", {
        serviceID,
        templateID,
        publicKey,
      });
      toast({
        title: "Error de configuración",
        description:
          "Faltan datos para enviar el formulario. Contactá al administrador.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // Enviar email con EmailJS
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });

      onOpen();
      setTimeout(() => onClose(), 4000);
    } catch (err) {
      console.error("Error al enviar mensaje:", err);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intentalo más tarde.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const bgGlass = useColorModeValue(
    "rgba(255, 255, 255, 0.25)",
    "rgba(26, 32, 44, 0.55)"
  );
  const inputFocusColor = useColorModeValue("gray.600", "purple.300");
  const buttonBg = useColorModeValue("gray.600", "purple.400");
  const buttonHover = useColorModeValue("gray.700", "purple.500");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      bgImage="url('/fondo-contacto.jpg')"
      bgSize="cover"
      p={4}
    >
      <Flex direction={{ base: "column", md: "row" }} w="100%" maxW="1200px">
        <Box w={{ base: "100%", md: "50%" }} p={{ base: 6, md: 12 }}>
          <Text fontSize={{ base: "sm", md: "xl" }} color={textColor} mb={4}>
            ¿Querés contactarme? Escribime.
          </Text>
        </Box>

        <MotionBox
          as="form"
          ref={form}
          onSubmit={handleSubmit}
          bg={bgGlass}
          backdropFilter="blur(12px)"
          p={{ base: 6, md: 12 }}
          borderRadius="xl"
          boxShadow="xl"
          w={{ base: "100%", md: "50%" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Campos ocultos necesarios para EmailJS */}
          <input type="hidden" name="user_name" value={formData.name} />
          <input type="hidden" name="user_email" value={formData.email} />
          <input type="hidden" name="reply_to" value={formData.email} />

          <Stack spacing={6}>
            {/* Nombre */}
            <MotionFormControl isInvalid={isInvalid("name")} isRequired>
              <Input
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="flushed"
                focusBorderColor={inputFocusColor}
                color={textColor}
              />
              <FormErrorMessage>Este campo es obligatorio.</FormErrorMessage>
            </MotionFormControl>

            {/* Email */}
            <MotionFormControl isInvalid={isInvalid("email")} isRequired>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="flushed"
                focusBorderColor={inputFocusColor}
                color={textColor}
              />
              <FormErrorMessage>Este campo es obligatorio.</FormErrorMessage>
            </MotionFormControl>

            {/* Mensaje */}
            <MotionFormControl isInvalid={isInvalid("message")} isRequired>
              <Textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="flushed"
                focusBorderColor={inputFocusColor}
                resize="none"
                color={textColor}
              />
              <FormErrorMessage>Este campo es obligatorio.</FormErrorMessage>
            </MotionFormControl>

            <Flex justify="center">
              <Button
                type="submit"
                bg={buttonBg}
                color="white"
                _hover={{ bg: buttonHover }}
              >
                Enviar
              </Button>
            </Flex>
          </Stack>
        </MotionBox>
      </Flex>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="xl"
          maxW={{ base: "90%", sm: "400px" }}
          w="100%"
          p={{ base: 4, md: 6 }}
        >
          <ModalHeader fontSize={{ base: "lg", md: "xl" }}>
            ¡Mensaje enviado con éxito!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <CheckCircleIcon w={12} h={12} color="green.300" mb={3} />
            <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
              ¡Gracias por escribirme! Te responderé pronto.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ContactForm;
