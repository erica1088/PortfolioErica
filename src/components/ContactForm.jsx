import { useState } from "react";
import { db } from "../firebase/Config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
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
import { sendMessage } from "../.Service/ContactFormService";

// Animación de los componentes Chakra UI
const MotionBox = motion(Box);
const MotionFormControl = motion(FormControl);

const ContactForm = () => {
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });
  const isInvalid = (field) => touched[field] && formData[field].trim() === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
  
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  
    try {
      await sendMessage(formData); // ✅ USO DEL HELPER
  
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
  
      onOpen();
      setTimeout(() => onClose(), 4000);
    } catch (err) {
      console.error("Error al guardar el mensaje:", err);
      toast({
        title: "Error",
        description: `No se pudo guardar el mensaje 😢. Error: ${err.message}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  // 🌗 Modo oscuro
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
      bgPosition="center"
      p={4}
    >
      <Flex direction={{ base: "column", md: "row" }} w="100%" maxW="1200px">
        <Box
          w={{ base: "100%", md: "50%" }}
          p={{ base: 6, md: 12 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            fontSize={{ base: "sm", md: "xl" }}
            color={textColor}
            mb={4}
            fontFamily="Roboto, Sans-Serif;"
          >
            ¿Querés contactarme? Escribime.
          </Text>
        </Box>

        <MotionBox
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={6}>
              {/* Nombre */}
              <MotionFormControl
                isInvalid={isInvalid("name")}
                isRequired
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
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
              <MotionFormControl
                isInvalid={isInvalid("email")}
                isRequired
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
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
              <MotionFormControl
                isInvalid={isInvalid("message")}
                isRequired
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
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

              {/* Botón Enviar */}
              <Flex justify="center">
                <Button
                  type="submit"
                  bg={buttonBg}
                  color="white"
                  _hover={{ bg: buttonHover }}
                  borderRadius="sm"
                  px={10}
                  transition="all 0.3s"
                >
                  Enviar
                </Button>
              </Flex>
            </Stack>
          </form>
        </MotionBox>
      </Flex>

      {/* Modal de confirmación */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>¡Mensaje enviado con éxito!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign="center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircleIcon w={16} h={16} color="green.300" mb={4} />
            </motion.div>
            <Text mt={2} color="gray.500" fontSize="sm">
              Me pondré en contacto con vos lo antes posible.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ContactForm;
