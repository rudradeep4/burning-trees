/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import {
  InputGroup,
  InputLeftAddon,
  Input
} from '@chakra-ui/react'
import { MdSearch } from "react-icons/md"
import { setSearchTerm } from "../reducers/searchReducer"
import { useDispatch } from "react-redux"

const Search = ({view, width}) => {

    const dispatch = useDispatch()

    return (
        <InputGroup px={4} pt={4} pb={12} w={350}>
            <InputLeftAddon 
                bg="none"
                borderColor="accent"
                pointerEvents="none" 
                children={<MdSearch color="white" />} 
            />
            <Input 
                variant="outline"
                placeholder={view === "Song" ? "Search song" : "Search artist"}
                _focus={{ borderColor: "accent" }}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
        </InputGroup>
    )
}

export default Search