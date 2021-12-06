import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Global, css } from '@emotion/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import songReducer from '../reducers/songReducer'
import searchReducer from '../reducers/searchReducer'

function MyApp({ Component, pageProps }) {

  const reducer = combineReducers({
    songs: songReducer,
    search: searchReducer
  })

  const store = createStore(reducer)

  const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
  }`

  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
