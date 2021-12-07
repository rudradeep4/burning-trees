import _ from "lodash"

const songReducer = (state = [], action) => {
    switch(action.type) {
        case 'CURRENT':
            return [...state, action.data]
        case 'PLAYLIST':
            return state.concat(action.data)
        case 'REMOVE':
            return _.drop(state)
        default:
            return state
    }
}

export const setCurrent = (song) => {
    return {
        type: "CURRENT",
        data: song
    }
}

export const setPlaylist = (songArr) => {
    return {
        type: "PLAYLIST",
        data: songArr
    }
}

export const removeCurrent = () => {
    return {
        type: "REMOVE"
    }
}

export default songReducer