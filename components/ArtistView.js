import {
    Box,
    VStack,
    Flex
} from '@chakra-ui/react'
import _ from 'lodash'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Artist from './Artist'
import Song from './Song'

export default function ArtistView({ songs }) {

    const currentSearch = useSelector(state => state.search)
    const [show, setShow] = useState(false)
    const [artistSongs, setArtistSongs] = useState(null)

    const artists = _.groupBy(songs, 'artist')
    const aa = Object.entries(artists)

    const filteredArtists = _.filter(aa, function(a) {
        return a[0].toLowerCase().indexOf(currentSearch) !== -1
    })

    return (
        (filteredArtists.length === 0)
            ?   <Box w="100%" h={768} display="flex" alignItems="center" justifyContent="center" textColor="accent">
                    Sorry, the song or artist you are looking for does not exist in the Burning Trees library yet.
                </Box>
            :   !show 
                ?   <VStack 
                        py={8} 
                        w="100%" 
                        h={768}
                        overflowY="scroll"
                    >
                        {_.chunk(filteredArtists, 4).map((g, i) => 
                            <Flex key={i} pb={4}>
                                {g.map((el, idx) =>
                                    <Artist key={idx} artist={el[0]} songs={el[1]} show={show} setShow={setShow} setArtistSongs={setArtistSongs} />
                                )}
                            </Flex>
                        )}
                    </VStack>
                :   <VStack 
                        py={8} 
                        w="100%" 
                        h={768}
                        overflowY="scroll"
                    >
                        <Artist artist={artistSongs.artist} songs={artistSongs.songs} show={show} setShow={setShow} setArtistSongs={setArtistSongs} />
                        {_.chunk(artistSongs.songs, 4).map((g, i) => 
                            <Flex key={i} pb={4}>
                                {g.map((el, idx) =>
                                    <Song key={idx} vId={el.vid} art={el.art} title={el.title} artist={el.artist} />
                                )}
                            </Flex>   
                        )}
                    </VStack>
    )
}