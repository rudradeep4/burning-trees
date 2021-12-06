import {
    Grid,
    Flex
} from '@chakra-ui/react'
import { MongoClient } from "mongodb"
var _ = require('lodash')
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import SongView from '../components/SongView'
import ArtistView from '../components/ArtistView'

const MotionGrid = motion(Grid)

export default function Library({ songs }) {

    const [view, setView] = useState('Song')

    return (
        <MotionGrid minH="100vh" bg="black">
            <Flex>
                <NavBar view={view} setView={setView} />
                {view === "Song" 
                    ?   <SongView songs={songs} />
                    :   <ArtistView songs={songs} />
                }
            </Flex>
        </MotionGrid>
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