import React from "react"
import {
    VStack,
    Text,
    Box,
    Image
} from '@chakra-ui/react'
import 'focus-visible'
import { motion, useCycle } from "framer-motion"
import { setCurrent } from "../reducers/songReducer"
import { useDispatch } from "react-redux"


const MotionBox = motion(Box)

const Song = ({ vId, art, title, artist }) => {

    const dispatch = useDispatch()

    return (
        <MotionBox 
            w={200} 
            h={350} 
            mx={4}
            onClick={() => dispatch(setCurrent({ vId, art, title, artist }))}
            style={{ cursor: "pointer" }} 
            rounded="lg"
            whileHover={{ scale: 1.1 }}
        >
            <Image src={art} w={200} h={200} rounded="lg" alt="album art" />
            <VStack pt={8}>
                <Text variant="view">{title}</Text>
                <Text variant="view" fontSize="sm">{artist}</Text>
            </VStack>
        </MotionBox>
    )
}

export default Song