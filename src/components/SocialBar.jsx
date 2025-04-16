
import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialBar = ({ contactRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!contactRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [contactRef]);

  if (!isVisible) return null;

  return (
    <Box position="fixed" bottom="4" left="4" zIndex="999">
      <Stack spacing={3}>
        <IconButton as="a" href="mailto:acosta.s.erica@gmail.com" icon={<MdEmail />} aria-label="Email" />
        <IconButton as="a" href="https://github.com/erica1088?tab=repositories" icon={<FaGithub />} aria-label="GitHub" />
        <IconButton as="a" href="https://www.linkedin.com/in/erica-samanta-acosta-759a84230/" icon={<FaLinkedin />} aria-label="LinkedIn" />
        <IconButton as="a" href="https://wa.me/0111564595781" icon={<FaWhatsapp />} aria-label="WhatsApp" />
      </Stack>
    </Box>
  );
};

export default SocialBar;
