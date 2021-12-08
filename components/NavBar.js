/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  Box,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  IconButton,
  Flex,
  Spacer,
  HStack,
  useRadio,
  useRadioGroup,
  Tooltip,
  FormControl,
  FormLabel,
  Switch,
  Center
} from '@chakra-ui/react'
import YouTube from "react-youtube"
import { MdClose, MdSearch } from 'react-icons/md'
import Logo from "./Logo"
import { removeCurrent, setCurrent } from "../reducers/songReducer"
import { setSearchTerm } from "../reducers/searchReducer"
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash";
  


function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderColor='primary'
        borderRadius='md'
        fontSize='xs'
        _checked={{
          bg: 'primary',
          color: 'accent',
          borderColor: 'primary',
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}
  
function Radio({view, setView}) {
  const options = ['Song', 'Artist']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'view',
    defaultValue: 'Song',
    onChange: setView,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

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
    const rSong = {vId: song.vid, art: song.art, title: song.title, artist: song.artist}
    await dispatch(removeCurrent())
    dispatch(setCurrent(rSong))
  }

  const handleEnd = async (e) => {
    await dispatch(removeCurrent())
    generateRandomSong()
  }

    return (
        <Box w={500} display="flex" alignItems="center" justifyContent="center" bg="accent">
          <VStack>
            <Logo color="primary" size="4xl" />

            <InputGroup px={8} pt={4} pb={8}>
                <InputLeftAddon 
                    bg="none"
                    borderColor="primary"
                    pointerEvents="none" 
                    children={<MdSearch color="black" />} 
                />
                <Input 
                    variant="outline"
                    placeholder={view === "Song" ? "Search song" : "Search artist"}
                    _focus={{ borderColor: "primary" }}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
            </InputGroup>

            <Radio view={view} setView={setView} />

            <Tooltip label="Pick a song and we'll keep the music going non-stop" fontSize="xs">
              <Box display="flex" alignItems="center" justifyContent="center">
              <FormControl pt={8}>
                <FormLabel htmlFor='infinity-play' mb='0'>
                  Infinity Play
                </FormLabel>
                <Center pt={2}><Switch id='infinity-play' onChange={(e) => setIsChecked(!isChecked)} colorScheme="teal" size="lg" boxShadow="none" /></Center>
              </FormControl>
              </Box>
            </Tooltip>
                

            <VStack pt={8} h={350} >
              {!currentSong[0]
                ?   null
                :   <Box w={250}>
                      <Flex>
                        <Text color="primary" pb={2}>Currently playing</Text>
                        <Spacer />
                        <IconButton 
                          icon={<MdClose />} 
                          variant="outline" 
                          size="xs" 
                          onClick={isChecked ? handleEnd : () => dispatch(removeCurrent())} 
                        />
                      </Flex>
                      <YouTube 
                          videoId={currentSong[0].vId} 
                          opts={opts} 
                          onReady={(e) => e.target.playVideo()}
                          onEnd={isChecked ? handleEnd : () => dispatch(removeCurrent())} 
                      />
                      <VStack pt={2}>
                        <Text color="primary" fontSize="md" align="center">{currentSong[0].title}</Text>
                        <Text color="primary" fontSize="sm" align="center">{currentSong[0].artist}</Text>
                      </VStack> 
                    </Box>  
              }
            </VStack>
          </VStack>
        </Box>
    )
}

export default NavBar