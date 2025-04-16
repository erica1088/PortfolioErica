import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import ScrollToTop from "./components/ScrollToTop";
import { useRef } from "react";
import ContactForm from "./components/ContactForm";
import { ChakraProvider, Box } from "@chakra-ui/react";


function App() {
  const contactRef = useRef(null);
  return (
    <>
        <ChakraProvider>
     <Box  >

      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <ScrollToTop />
      <SocialBar contactRef={contactRef} /> {/* Pasa la ref como prop */}
      <Footer ref={contactRef} /> {/*  Pasa la ref al componente */}

      </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
