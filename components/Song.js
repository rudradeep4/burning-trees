import React from "react"
import {
    VStack,
    Text,
    Box,
    Image
} from '@chakra-ui/react'
import 'focus-visible'
import { motion } from "framer-motion"
import { removeCurrent, setCurrent } from "../reducers/songReducer"
import { useDispatch } from "react-redux"


const MotionBox = motion(Box)

const Song = ({ vId, art, title, artist }) => {

    const dispatch = useDispatch()

    const handleClick = async (e) => {
        await dispatch(removeCurrent());
        dispatch(setCurrent({ vId, art, title, artist }))
    }

    return (
        <MotionBox 
            w={[100, 200]} 
            h={[175, 350]} 
            mx={[2, 4]}
            onClick={handleClick}
            style={{ cursor: "pointer" }} 
            rounded="lg"
            whileHover={{ scale: 1.1 }}
        >
            <Image src={art} w={[100, 200]} h={[100, 200]} rounded="lg" alt="album art" />
            <VStack pt={[4, 8]}>
                <Text variant="view" fontSize={["10px", "md"]}>{title}</Text>
                <Text variant="view" fontSize={["10px", "sm"]}>{artist}</Text>
            </VStack>
        </MotionBox>
    )
}

export default Song