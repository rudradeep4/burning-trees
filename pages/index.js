import {
  Grid,
  VStack,
  HStack,
  Text,
  Kbd
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Logo from '../components/Logo'
import ParticleBg from '../components/ParticleBg'


export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const handleEnter = (event) => {
      if (event.keyCode === 32) {
        router.push('/library')
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid minH='100vh' bgImage="bg.jpg" bgRepeat="no-repeat" bgSize="cover" display="flex" alignItems="right" justifyContent="right">
      <ParticleBg />
      <VStack p={16}>
        <Logo color="accent" size="5xl" />
        <HStack spacing={4} >
          <Text color="accent" fontSize="xl">MUSIC TO</Text>
          <span>
            <Kbd variant="normal">SPACE</Kbd>
          </span>
          <Text color="accent" fontSize="2xl">OUT TO</Text>
        </HStack>
      </VStack>
    </Grid>
  )
}
