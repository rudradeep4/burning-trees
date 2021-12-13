/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  IconButton,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  HStack
} from '@chakra-ui/react'
import YouTube from "react-youtube"
import { MdClose, MdFastForward } from 'react-icons/md'
import { ImShuffle } from 'react-icons/im'
import { removeCurrent, setCurrent } from "../reducers/songReducer"
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import RadioButtons from "./RadioButtons"
import Search from "./Search"
import Logo from "./Logo"
import { GiMusicalScore } from 'react-icons/gi'
  

const NavBar = ({view, setView, songs}) => {
  
  const dispatch = useDispatch()
  const currentSong = useSelector(state => state.songs)
  const [isChecked, setIsChecked] = useState(false)

  const opts = {
      height: '250',
      width: '250',
  }

  const generateRandomSong = async () => {
    const song = _.sample(songs)
    const songObj = {vId: song.vid, art: song.art, title: song.title, artist: song.artist}
    await dispatch(removeCurrent())
    dispatch(setCurrent(songObj))
  }

  const handleEnd = async (e) => {
    await dispatch(removeCurrent())
    generateRandomSong()
  }

  const handleClick = () => {
    setIsChecked(!isChecked)
    generateRandomSong()
  }

  return (
    <VStack p={8}>
      <HStack spacing={0}>
        <GiMusicalScore color="white" size="32px" />
        <Logo color="accent" fontSize="4xl" />
      </HStack>

      <Search view={view} />

      <RadioButtons view={view} setView={setView} />

      <Box pt={12}>
        <Button 
          leftIcon={<ImShuffle color="green" />} 
          onClick={handleClick} 
          variant="playlist"
        >
          Play Random Playlist
        </Button>
      </Box>

      <VStack pt={8} w={250} h={350}>
        {!currentSong[0]
          ?   null
          :   <Box w={250}>
                <Flex>
                  <Text color="accent" pb={2}>Currently playing</Text>

                  <Spacer />

                  <ButtonGroup>
                    <IconButton 
                      icon={<MdFastForward />} 
                      variant="outline" 
                      size="xs" 
                      onClick={handleEnd} 
                    />
                    <IconButton 
                      icon={<MdClose />} 
                      variant="outline" 
                      size="xs" 
                      onClick={() => dispatch(removeCurrent())} 
                    />
                  </ButtonGroup>
                </Flex>

                <YouTube 
                  id="current"
                  videoId={currentSong[0].vId} 
                  opts={opts} 
                  onReady={(e) => e.target.playVideo()}
                  onEnd={isChecked ? handleEnd : () => dispatch(removeCurrent())} 
                />
                
                <VStack pt={2}>
                  <Text color="accent" fontSize="md" align="center">{currentSong[0].title}</Text>
                  <Text color="accent" fontSize="sm" align="center">{currentSong[0].artist}</Text>
                </VStack> 
              </Box>  
        }
      </VStack>
    </VStack>
  )
}

export default NavBar