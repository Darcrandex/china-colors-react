/**
 * @name App
 * @description
 * @author darcrand
 */

import ColorItem from '@/pages/ColorItem'
import Main from '@/pages/Main'
import Test from '@/pages/Test'
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
  { path: '/test', element: <Test /> },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
