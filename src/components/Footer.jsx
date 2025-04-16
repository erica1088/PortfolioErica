import {
    Box,
    Heading,
    Link,
    Stack,
    Icon,
    Text,
    useColorModeValue,
    SimpleGrid,
  } from "@chakra-ui/react";
  import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import { motion } from "framer-motion";
  import React, { forwardRef } from "react";
  
  const MotionBox = motion(Box);
  const MotionIcon = motion(Icon);
  const MotionText = motion(Text);
  
  const iconHoverStyle = {
    whileHover: {
      scale: 1.2,
      rotate: 10,
      boxShadow: "0 0 15px rgba(232, 121, 249, 0.6)",
      cursor: "pointer",
    },
    transition: { type: "spring", stiffness: 200, damping: 12 },
  };
  
  const Footer = forwardRef((props, ref) => {
    const textGeneralColor = useColorModeValue("black", "white");
    const bgColor = useColorModeValue("gray.900", "'gray.900");
    const headingColor = useColorModeValue("'gray.900", "whiteAlpha.900");
  
    return (
      <MotionBox
        ref={ref}
        id="contact"
        bg="#333"
        borderTop="1px solid rgba(0,0,0,0.1)"
        py={{ base: 8, md: 10 }}
        px={{ base: 4, md: 8 }}
        mt="auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} alignItems="center">
          {/* Columna izquierda con información de contacto */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ base: "center", md: "flex-start" }}
            px={{ base: 2, md: 10 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize={{ base: "lg", md: "2xl" }} color="white" mb={6}>
              Contacto
            </Heading>
  
            <Stack spacing={3} align={{ base: "center", md: "flex-start" }}>
              <Text fontSize="md" color="white">
                +054 1164595781
              </Text>
              <Text fontSize="md" color="white">
                Tigre - Provincia de Buenos Aires, Argentina.
              </Text>
              <Text fontSize="md" color="white">
                <Link href="mailto:info@example.com" color="white">
                  acosta.s.erica@gmail.com
                </Link>
              </Text>
            </Stack>
          </Box>
  
          {/* Columna derecha con iconos de redes sociales */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ base: "center", md: "flex-start" }}
            px={{ base: 2, md: 10 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize={{ base: "lg", md: "2xl" }} color="white" mb={6}>
              Redes Sociales
            </Heading>
  
            <Stack spacing={3} align={{ base: "center", md: "flex-start" }}>
              {/* GitHub */}
              <Link
                href="https://github.com/erica1088?tab=repositories"
                isExternal
              >
                <Stack
                  direction="row"
                  align="center"
                  spacing={2}
                  as={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <MotionIcon
                    as={FaGithub}
                    boxSize={6}
                    color="gray.800"
                    {...iconHoverStyle}
                  />
                  <Text fontSize="md" color="white">
                    GitHub
                  </Text>
                </Stack>
              </Link>
  
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/erica-samanta-acosta-759a84230/"
                isExternal
              >
                <Stack
                  direction="row"
                  align="center"
                  spacing={2}
                  as={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <MotionIcon
                    as={FaLinkedin}
                    boxSize={6}
                    color="blue.500"
                    {...iconHoverStyle}
                  />
                  <Text fontSize="md" color="white">
                    LinkedIn
                  </Text>
                </Stack>
              </Link>
  
              {/* WhatsApp */}
              <Link href="https://wa.me/0111564595781" isExternal>
                <Stack
                  direction="row"
                  align="center"
                  spacing={2}
                  as={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <MotionIcon
                    as={FaWhatsapp}
                    boxSize={6}
                    color="green.500"
                    {...iconHoverStyle}
                  />
                  <Text fontSize="md" color="white">
                    WhatsApp
                  </Text>
                </Stack>
              </Link>
            </Stack>
          </Box>
        </SimpleGrid>
  
        {/* Derechos reservados */}
        <MotionText
          mt={8}
          fontSize="xs"
          textAlign="center"
          color="white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Erica Acosta, Todos los derechos
          reservados.
        </MotionText>
      </MotionBox>
    );
  });
  
  export default Footer;
  