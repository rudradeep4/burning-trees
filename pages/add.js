import {
    Box,
    Flex,
    Input,
    FormControl,
    Button,
    Text,
    Image
} from '@chakra-ui/react'
import { useState } from 'react'
import FileBase64 from 'react-file-base64'
import Logo from '../components/Logo'

export default function Add () {

    const [vid, setVid] = useState('')
    const [image, setImage] = useState('')
    const [art, setArt] = useState('')
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
    
        e.preventDefault()

        setMessage('')
        setError('')

        let song = {
            vid,
            art,
            title,
            artist,
            dateAdded: new Date().toISOString(),
        }

        // save the post
        let response = await fetch('/api/songs', {
            method: 'POST',
            body: JSON.stringify(song),
        })

        let data = await response.json()
        if (data.success) {
            // set the message
            setMessage(data.message)
        } else {
            // set the error
            setError(data.message)
        }
    }

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "zyhknhhr")
        data.append("cloud_name", "dzrar9gbf")
        fetch('https://api.cloudinary.com/v1_1/dzrar9gbf/image/upload', {
            method: 'POST',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {setArt(data.url), console.log(art)})
        .catch(err => console.log(err))
    }

    return (
        <Box minH="100vh" bg="primary">
            <Logo size="6xl" color="accent" />

            <Flex pt={20} px={40}>
                {/* Upload image to cloudinary and get url */}
                <FormControl>
                    <Input
                        type="file"
                        textColor="accent"
                        onChange={(e) => {setImage(e.target.files[0])}}
                        w={300}
                        mr={4}
                    />
                    <Button onClick={uploadImage}>Upload</Button>
                    <Image src={art} w={300} h={300} pt={4} alt="album cover" />
                </FormControl>

                {/* Form for rest of the details */}
                <form onSubmit={handleSubmit}>
                    {error ? (
                            <Text bg="red" color="white">{error}</Text>
                    ) : null}
                    {message ? (
                            <Text bg="green" color="white">{message}</Text>
                    ) : null}
                    <FormControl pb={4}>
                        <Input 
                            type="text" 
                            id="vid" 
                            textColor="accent"
                            onChange={(e) => setVid(e.target.value)} 
                            w={500} 
                            placeholder="VideoID" 
                            _placeholder={{ color: "accent" }}
                        />
                    </FormControl>

                    <FormControl pb={4}>
                        <Input 
                            type="text" 
                            id="title" 
                            textColor="accent"
                            onChange={(e) => setTitle(e.target.value)} 
                            w={500} 
                            placeholder="Title" 
                            _placeholder={{ color: "accent" }}
                        />
                    </FormControl>

                    <FormControl pb={4}>
                        <Input 
                            type="text" 
                            id="artist" 
                            textColor="accent"
                            onChange={(e) => setArtist(e.target.value)} 
                            w={500} 
                            placeholder="Artist" 
                            _placeholder={{ color: "accent" }}
                        />
                    </FormControl>

                    <Button type="button" onClick={handleSubmit}>Add Song</Button>
                </form>
            </Flex>
        </Box>
    )
}