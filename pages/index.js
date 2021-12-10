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
import Head from 'next/head'


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
      <Head>
        <title>Burning Trees</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ParticleBg />
      <VStack p={{ base: '4', md: '8', lg: '16' }}>
        <Logo color="accent" size={{ base: 'xl', md: '3xl', lg: '5xl' }} />
        <HStack spacing={{ base: '2', md: '4', lg: '4' }} >
          <Text color="accent" fontSize={{ base: 'xs', md: 'md', lg: 'xl' }}>MUSIC TO</Text>
          <span>
            <Kbd variant="normal">SPACE</Kbd>
          </span>
          <Text color="accent" fontSize={{ base: 'xs', md: 'md', lg: 'xl' }}>OUT TO</Text>
        </HStack>
      </VStack>
    </Grid>
  )
}
