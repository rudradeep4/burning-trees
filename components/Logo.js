/* eslint-disable react/no-children-prop */
import {
    Box,
    Heading
} from '@chakra-ui/react'

const Logo = ({color, size}) => {
    return (
        <Box px={4} display="flex" alignItems="center" justifyContent="center">
            <Heading fontSize={size} color={color} textAlign="center">
                BURNING TREES
            </Heading>
        </Box>

    )
}

export default Logo