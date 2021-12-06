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
    useRadioGroup
} from '@chakra-ui/react'
import YouTube from "react-youtube"
import { MdClose, MdSearch } from 'react-icons/md'
import Logo from "./Logo"
import { setCurrent } from "../reducers/songReducer"
import { setSearchTerm } from "../reducers/searchReducer"
import { useDispatch, useSelector } from "react-redux"
  


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

const NavBar = ({view, setView}) => {

    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.songs)

    const opts = {
        height: '250',
        width: '250',
    }

    return (
        <Box w={500} display="flex" alignItems="center" justifyContent="center" bg="accent">
            <VStack>
                <Logo color="primary" size="4xl" />

                <InputGroup px={8} pt={4} pb={16}>
                    <InputLeftAddon 
                        bg="none"
                        borderColor="primary"
                        pointerEvents="none" 
                        children={<MdSearch color="black" />} 
                    />
                    <Input 
                        variant="outline"
                        bg="none"
                        borderColor="primary"
                        textColor="primary"
                        fontSize="xs"
                        placeholder={view === "Song" ? "Search song" : "Search artist"}
                        _placeholder={{ color: "#000000", opacity: 1 }}
                        _hover={{ borderColor: "primary" }}
                        _focus={{ borderColor: "primary" }}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    />
                </InputGroup>

                <Radio view={view} setView={setView} />
                
                <VStack pt={16}>
                    {currentSong === "No music playing"
                        ?   null
                        :   <Box>
                                <Flex>
                                    <Text color="primary" pb={2}>Currently playing</Text>
                                    <Spacer />
                                    <IconButton 
                                        icon={<MdClose />} 
                                        onClick={() => dispatch(setCurrent("No music playing"))} 
                                        variant="outline" 
                                        borderColor="primary" 
                                        borderRadius="full" 
                                        size="xs" 
                                        color="primary" 
                                    />
                                </Flex>
                                <YouTube 
                                    videoId={currentSong.vId} 
                                    opts={opts} 
                                    onReady={(e) => e.target.playVideo()} 
                                    onEnd={() => dispatch(setCurrent("No music playing"))} 
                                /> 
                            </Box>  
                    }
                    <VStack pt={2}>
                        <Text color="primary" fontSize="md" align="center">{currentSong.title}</Text>
                        <Text color="primary" fontSize="sm" align="center">{currentSong.artist}</Text>
                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}

export default NavBar