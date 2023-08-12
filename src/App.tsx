/**
 * @name App
 * @description
 * @author darcrand
 */

import ColorItem from '@/pages/ColorItem'
import Main from '@/pages/Main'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <ColorItem /> },
      { path: ':id', element: <ColorItem /> },
    ],
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
