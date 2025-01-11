import React from 'react'
import { Provider } from 'react-redux'
import Head from './components/Head'
import Body from './components/Body'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContaner from './components/MainContaner'
import WatchFullContaner from './components/WatchFullContaner'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContaner />
      },
      {
        path: `/watch/:id`,
        element: <WatchFullContaner />
      }
    ]
  }
])
const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={Router} />
    </Provider>
  )
}

export default App
