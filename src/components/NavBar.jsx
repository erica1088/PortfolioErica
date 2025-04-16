import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Collapse,
    useColorMode,
    useColorModeValue,
    Text,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    const navLinks = [
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ];
  
    const bg = useColorModeValue(
      "rgba(255, 255, 255, 0.8)",
      "rgba(26, 32, 44, 0.8)"
    );
    const textColor = useColorModeValue("white", "gray.200");
    const hoverColor = useColorModeValue("black", "white");
    const borderColor = useColorModeValue(
      "rgba(0, 0, 0, 0.1)",
      "rgba(255, 255, 255, 0.1)"
    );
    const linkHoverBg = useColorModeValue("gray.100", "gray.700");
  
    return (
      <Box
        bg="-webkit-linear-gradient( 90deg, rgba(108,76,206, .9) 0%, rgba(127,86,253, .9) 100%)"
        backdropFilter="blur(10px)"
        px={{ base: 4, md: 8 }}
        py={4}
        position="sticky"
        top={0}
        zIndex={10}
        borderBottom={`1px solid ${borderColor}`}
      >
        <Flex align="center" justify="space-between">
          {/* Logo con imagen */}
          <Text fontWeight="bold" color="white" fontFamily="Roboto, Sans-Serif;">
            Erica Acosta
          </Text>
  
          {/* Links de escritorio */}
          <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                color={textColor}
                fontWeight="medium"
                position="relative"
                _hover={{
                  color: hoverColor,
                  textDecoration: "none",
                  _after: {
                    transform: "scaleX(1)",
                    transformOrigin: "left",
                  },
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  transform: "scaleX(0)",
                  height: "2px",
                  bottom: "-2px",
                  left: 0,
                  backgroundColor: hoverColor,
                  transformOrigin: "right",
                  transition: "transform 0.3s ease-out",
                }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
  
          {/* Botones: modo oscuro y menú móvil */}
          <HStack spacing={2}>
            <IconButton
              aria-label="Cambiar modo"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              _hover={{ bg: linkHoverBg }}
            />
            <IconButton
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              onClick={onToggle}
              variant="ghost"
              color={textColor}
              _hover={{ bg: linkHoverBg }}
            />
          </HStack>
        </Flex>
  
        {/* Menú móvil */}
        <Collapse in={isOpen} animateOpacity>
          <Box mt={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontWeight="medium"
                  px={2}
                  py={2}
                  borderRadius="md"
                  color={textColor}
                  _hover={{ bg: linkHoverBg, color: hoverColor }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    );
  }
  
  export default Navbar;
  