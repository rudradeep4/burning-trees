import React, { useState } from "react";
import {
  Box,
  HStack,
  useRadio,
  useRadioGroup
} from '@chakra-ui/react'

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
          borderColor='accent'
          borderRadius='md'
          fontSize='xs'
          textColor="accent"
          _checked={{
            bg: 'accent',
            color: 'primary',
            // borderColor: 'accent',
          }}
          px={4}
          py={2}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
    
  function RadioButtons({view, setView}) {
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

export default RadioButtons