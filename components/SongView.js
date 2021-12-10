import {
    Box,
    VStack,
    Flex
} from '@chakra-ui/react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import Song from '../components/Song'
import useWindowDimensions from '../hooks'

export default function SongView({ songs }) {

    const currentSearch = useSelector(state => state.search)
    const { height, width } = useWindowDimensions()

    const filteredSongs = _.filter(songs, function(song) {
        return song.title.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1
    })

    return (
        (filteredSongs.length === 0)
            ?   <Box w="100%" h={height} display="flex" alignItems="center" justifyContent="center" textColor="accent">
                    Sorry, the song or artist you are looking for does not exist in the Burning Trees library yet.
                </Box>
            :   <VStack 
                    py={8} 
                    w="100%"
                    h={height}
                    overflowY="scroll"
                >
                    {_.chunk(filteredSongs, 4).map((g, i) => 
                        <Flex key={i} pb={4}>
                            {g.map((el, idx) =>
                                <Song key={idx} vId={el.vid} art={el.art} title={el.title} artist={el.artist} />
                            )}
                        </Flex>   
                    )}
                </VStack>
    )
}