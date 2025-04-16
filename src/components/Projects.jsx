import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Image,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { useState } from "react";
  
  const projectImages = [
    "/images/e-commerce.jpg",
    "/images/adacomics.jpg",
    "/images/todolist.jpg",
  ];
  
  const projects = [
    {
      title: "E-commerce React",
      description:
        "Tienda online desarrollada con React, manejo de carrito, filtrado de productos y Firebase como backend.",
      image: "/imgecommerce.png",
      github: "https://github.com/tuusuario/ecommerce-react",
    },
    {
      title: "AdaComics",
      description:
        "Aplicación para explorar cómics usando la API de Marvel, creada con React y diseño responsive.",
      image: "/imgcomics.png",
      github: "https://github.com/tuusuario/adacomics",
    },
    {
      title: "Lista de Tareas",
      description:
        "App de tareas creada en React con funcionalidades de agregar, eliminar y marcar tareas como completadas.",
      image: "imgtodo.png",
      github: "https://github.com/tuusuario/lista-tareas",
    },
  ];
  
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  
  function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleCardClick = (project) => {
      setSelectedProject(project);
      onOpen();
    };
  
    const bgColor = useColorModeValue("gray.50", "gray.900"); // Fondo para modo claro y oscuro
    const cardBgColor = useColorModeValue("white", "gray.800"); // Fondo de la tarjeta para modo claro y oscuro
    const textColor = useColorModeValue("gray.800", "gray.100"); // Color de texto en modo claro y oscuro
  
    return (
      <Box
        py={{ base: 16, md: 32 }}
        px={{ base: 6, md: 12 }}
        id="projects"
        bg={bgColor}
        minH="100vh"
        bgSize="cover"
        bgPosition="center"
      >
        <Heading
          fontSize={["xl", "2xl", "3xl"]}
          mb={14}
          textAlign="center"
          color={textColor}
          fontFamily="Montserrat, sans-serif"
        >
          Proyectos Destacados
        </Heading>
  
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems="center"
        >
          {projects.map((project, index) => {
            return (
              <MotionBox
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                bg={cardBgColor}
                borderRadius="xl"
                boxShadow="lg"
                p={6}
                textAlign="center"
                cursor="pointer"
                backdropFilter="blur(10px)"
                maxWidth="350px"
                width="100%"
                _hover={{
                  boxShadow: "2xl",
                  transform: "scale(1.03)",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => handleCardClick(project)}
              >
                {/* Imagen dentro de la tarjeta */}
                <Image
                  src={project.image}
                  alt={project.title}
                  mb={6}
                  maxWidth="100%"
                  height="auto" // Mantiene la relación de aspecto
                  objectFit="contain" // Ajusta la imagen sin deformarla
                />
  
                {/* Texto animado */}
                <MotionText
                  fontWeight="bold"
                  fontSize={{ base: "sm", md: "xl" }} // Ajuste del tamaño de texto 
                  color="gray.800"
                  mb={3}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {project.title}
                </MotionText>
                <MotionText
                  fontSize={{ base: "sm", md: "md" }} // Ajuste del tamaño de texto 
                  color="gray.600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {project.description}
                </MotionText>
              </MotionBox>
            );
          })}
        </SimpleGrid>
  
        {/* Botón "Ver más" debajo de las tarjetas */}
        <Box mt={12} textAlign="center">
          <Button
            as="a"
            href="https://github.com/erica1088?tab=repositories"
            target="_blank"
            colorScheme="purple.400"
            variant="solid"
            bg="-webkit-linear-gradient( 90deg, rgba(108,76,206, .9) 0%, rgba(127,86,253, .9) 100%)"
            borderRadius="md"
          >
            Ver más en GitHub
          </Button>
        </Box>
  
        {selectedProject && (
          <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent bg="#2D3748" color="white" borderRadius="2xl">
              <ModalHeader>{selectedProject.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text mb={4} fontSize="md">
                  {selectedProject.description}
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={onClose}
                  colorScheme="teal"
                  variant="outline"
                  borderRadius="md"
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    );
  }
  
  export default Projects;
  