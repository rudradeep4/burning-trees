const songReducer = (state = "No music playing", action) => {
    switch(action.type) {
        case 'CURRENT':
            return action.data
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

export default songReducer