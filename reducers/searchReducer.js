const searchReducer = (state = "", action) => {
    switch(action.type) {
        case 'SEARCH':
            return action.data
        default:
            return state
    }
}

export const setSearchTerm = (searchTerm) => {
    return {
        type: "SEARCH",
        data: searchTerm
    }
}

export default searchReducer