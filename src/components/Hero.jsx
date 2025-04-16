import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { DownloadIcon } from "@chakra-ui/icons";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  
  function Hero() {
    const headingColor = useColorModeValue("#1a202c", "white");
    const textColor = useColorModeValue("#2d3748", "#e2e8f0");
    const buttonColor = useColorModeValue(
      "rgba(108,76,206, .9)",
      "rgba(108,76,206, .9)"
    );
    const bgColor = useColorModeValue(
      "-webkit-linear-gradient( 90deg, rgba(108,76,206, .9) 0%, rgba(127,86,253, .9) 100%)",
      "-webkit-linear-gradient( 90deg, rgba(108,76,206, .9) 0%, rgba(127,86,253, .9) 100%)"
    );
  
    return (
      <Box
        id="home"
        minH="100vh"
        px={{ base: 6, md: 12 }}
        py={{ base: 20, md: 32 }}
        bg={bgColor}
      >
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 20 }}
          maxW="7xl"
          mx="auto"
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Texto */}
          <MotionBox
            flex="1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="white"
              fontWeight="bold"
              fontFamily="Roboto, Sans-Serif;"
              lineHeight="shorter"
              position="relative"
              display="inline-block"
              mb={4}
            >
              Hola, soy Erica Acosta
              <Box
                h="2px"
                w="60%"
                bg="#CCCCFF"
                position="absolute"
                bottom={-1}
                left="0"
                borderRadius="full"
              />
            </Heading>
  
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="white"
              maxW={{ base: "100%", md: "90%" }}
              fontFamily="Roboto, sans-serif;"
              mt={2}
            >
              Desarrolladora Frontend enfocada en crear experiencias digitales
              modernas, accesibles y centradas en el usuario.
            </Text>
  
            <Flex
              mt={6}
              gap={4}
              wrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
            >
              <MotionButton
                whileHover={{ scale: 1.05 }}
                bg="white"
                color={buttonColor}
                size="md"
                fontWeight="semibold"
                px={6}
                py={3}
                borderRadius="full"
                as="a"
                href="https://github.com/erica1088?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ bg: "gray.100" }}
                boxShadow="md"
              >
                Ver Proyectos
              </MotionButton>
  
              <MotionButton
                whileHover={{ scale: 1.05 }}
                bg="white"
                color={buttonColor}
                size="md"
                fontWeight="semibold"
                px={6}
                py={3}
                borderRadius="full"
                border="2px solid"
                borderColor="#CCCCFF"
                leftIcon={<DownloadIcon boxSize={4} />}
                as="a"
                href="/cv-erica-acosta.pdf"
                download
                _hover={{ bg: "gray.100" }}
                boxShadow="md"
              >
                Descargar CV
              </MotionButton>
            </Flex>
          </MotionBox>
  
          {/* Imagen */}
          <MotionBox
            flex="1"
            display="flex"
            justifyContent="center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/foto.png"
              alt="Erica Acosta"
              boxSize={["180px", "220px", "260px", "300px"]}
              objectFit="cover"
              borderRadius="full"
              border="6px solid white"
              boxShadow="2xl"
            />
          </MotionBox>
        </Flex>
      </Box>
    );
  }
  
  export default Hero;
  