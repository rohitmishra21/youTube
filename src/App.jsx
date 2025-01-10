import React from 'react'
import { Provider } from 'react-redux'
import Head from './components/Head'
import Body from './components/Body'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className=''>
        <Head />
        <Body />
      </div>
    </Provider>
  )
}

export default App
