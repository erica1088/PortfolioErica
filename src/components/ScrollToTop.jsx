
import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    visible && (
      <IconButton
        icon={<FaArrowUp />}
        position="fixed"
        bottom={['4', '6']}
        right={['4', '6']}
        zIndex="999"
        bg="gray.700"
        color="white"
        size={['md', 'lg']} 
        borderRadius="full"
        aria-label="Volver arriba"
        onClick={scrollToTop}
        _hover={{ bg: 'gray.600' }}
        boxShadow="md"
        transition="all 0.3s"
      />
    )
  )
}
