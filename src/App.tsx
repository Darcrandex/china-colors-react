/**
 * @name App
 * @description
 * @author darcrand
 */

import Home from '@/pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Main from './pages/Main'

export default function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<Home />} />
              <Route path='/main' element={<Main />} />
            </>
          )
        )}
      />
    </>
  )
}
