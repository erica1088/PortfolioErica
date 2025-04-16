import {
    Box,
    Heading,
    Text,
    Divider,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { motion } from 'framer-motion'
  
  const MotionBox = motion(Box)
  const MotionText = motion(Text)
  const MotionHeading = motion(Heading)
  
  function About() {
    const dividerColor = useColorModeValue('gray.300', 'gray.600')
    const textColor = useColorModeValue('gray.700', 'gray.200')
    const headingColor = useColorModeValue('gray.800', 'gray.100')
    const accentColor = useColorModeValue('black', 'white')
    const bgColor = useColorModeValue('gray.50', 'gray.900')
  
    return (
      <Box
        as="section"
        id="about"
        py={{ base: 16, sm: 20, md: 28 }}
        px={{ base: 4, sm: 6, md: 10 }}
        textAlign="center"
        bg="+"
    
      >
        <Divider borderColor={dividerColor} maxW="3xl" mx="auto" mb={10} />
  
        <MotionBox
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionHeading
            as="h2"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '3xl' }}
            fontWeight="bold"
             fontFamily="Roboto sans-serif;"
            mb={{ base: 6, md: 8 }}
          
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sobre mí
          </MotionHeading>
  
          <Box maxW="3xl" mx="auto" px={{ base: 2, sm: 4 }}>
            <MotionText
              fontSize={{ base: 'xs', sm: 'md' }}
              color={textColor}
              lineHeight="taller"
              mb={6}
              textAlign="justify"
              fontFamily="Montserrat, sans-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Soy{' '}
              <Text as="span" fontWeight="semibold" color={accentColor}>
                desarrolladora frontend
              </Text>{' '}
              con formación en{' '}
              <Text as="span" fontWeight="semibold" color={accentColor}>
                ADA ITW
              </Text>
              , y experiencia trabajando de forma freelance en diversos proyectos
              web. Me apasiona transformar ideas en experiencias digitales
              funcionales, accesibles y atractivas para el usuario.
            </MotionText>
  
            <MotionText
              fontSize={{ base: 'xs', sm: 'md' }}
              color={textColor}
              textAlign="justify"
              fontFamily="Montserrat, sans-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Entre mis habilidades técnicas se encuentran{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                HTML
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                CSS
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                JavaScript
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                React
              </Text>{' '}
              y{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                Tailwind
              </Text>
              , además del uso de herramientas como{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                Firebase
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                SQL
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                Git
              </Text>
              ,{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                GitHub
              </Text>{' '}
              y{' '}
              <Text as="span" fontWeight="medium" color={accentColor}>
                Jira
              </Text>
              . Me mantengo en constante aprendizaje y disfruto enfrentar nuevos
              desafíos que me impulsen a crecer profesionalmente.
            </MotionText>
          </Box>
        </MotionBox>
      </Box>
    )
  }
  
  export default About
  