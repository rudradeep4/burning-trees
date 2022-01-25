import {
  Grid,
  VStack,
  HStack,
  Text,
  Button,
  Kbd
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Logo from '../components/Logo'
import ParticleBg from '../components/ParticleBg'
import Head from 'next/head'


export default function Home() {

  const router = useRouter()
  const [wait, setWait] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/library')
    setWait(!wait)
  }

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
        <Button isLoading={wait} onClick={handleClick}>ENTER</Button>
      </VStack>
    </Grid>
  )
}
