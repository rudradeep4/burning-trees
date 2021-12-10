import {
    Box,
    Flex
} from '@chakra-ui/react'
import { MongoClient } from "mongodb"
var _ = require('lodash')
import { useState } from 'react'
import SongView from '../components/SongView'
import ArtistView from '../components/ArtistView'
import Head from 'next/head'
import NavBar from '../components/NavBar'



export default function Library({ songs }) {

    const [view, setView] = useState('Song')

    return (
        <Box>
            <Head>
                <title>Burning Trees - Library</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Flex bg="primary">
                <NavBar view={view} setView={setView} songs={songs} />
                {view === "Song" 
                    ?   <SongView songs={songs} />
                    :   <ArtistView songs={songs} />
                }
            </Flex>
        </Box>
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect(process.env.MONGODB_URI)

    const db = client.db()
    db.collection('songs').createIndex( { title: "text", artist: "text" } )

    const songs = await db
        .collection("songs")
        .find({})
        .toArray()

    return {
        props: {
            songs: JSON.parse(JSON.stringify(_.shuffle(songs))),
        },
    }
}