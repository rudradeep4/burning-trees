import React from "react"
import {
    Text,
    Box,
    Heading,
    Flex
} from '@chakra-ui/react'
import 'focus-visible'
import { motion } from "framer-motion"


const MotionBox = motion(Box)

const Artist = ({ artist, songs, show, setShow, setArtistSongs }) => {

    return (
        <MotionBox 
            w={200} 
            h={350} 
            mx={4}
            onClick={() => {setArtistSongs({artist: artist, songs: songs}), setShow(!show)}}
            style={{ cursor: "pointer" }} 
            rounded="lg"
            whileHover={{ scale: 1.1 }}
        >
            <Box bg="primary" borderColor="accent" borderWidth="thin" w={200} h={200} rounded="lg">
                <Heading color="accent" p={2}>{songs.length}</Heading>
            </Box>
            <Text pt={8} color="accent" fontSize="md" align="center">{artist}</Text>
        </MotionBox>
    )
}

export default Artist