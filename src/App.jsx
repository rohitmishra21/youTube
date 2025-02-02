import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import Head from './components/Head'
import Body from './components/Body'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContaner from './components/MainContaner'


const WatchFullContaner = lazy(() => import("./components/WatchFullContaner"))

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
        path: "/watch/:id",
        element: <Suspense fallback={<h1>Loading....</h1>}><WatchFullContaner /></Suspense>,
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
