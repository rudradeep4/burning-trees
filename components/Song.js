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

    // const [isVisible, setIsVisible] = useState(false)
    const [animate, cycle] = useCycle(
        { rotateY: 0, transition: {duration: 0.5} },
        { rotateY: 360, transition: {duration: 0.5} }
    )

    return (
        <MotionBox 
            w={200} 
            h={350} 
            mx={4}
            onClick={() => dispatch(setCurrent({ vId, art, title, artist }))}
            style={{ cursor: "pointer" }} 
            rounded="lg"
            whileHover={{ scale: 1.1 }}
            animate={animate}
            onTap={cycle}
        >
            <Image src={art} w={200} h={200} rounded="lg" alt="album art" />
            <VStack pt={8}>
                <Text color="accent" fontSize="md" align="center">{title}</Text>
                <Text color="accent" fontSize="sm" align="center">{artist}</Text>
            </VStack>
        </MotionBox>
    )
}

export default Song