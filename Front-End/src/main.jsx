import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/01_Home/Home';
import Session1 from './component/02_Sesion/empresa/Session1';
import CreateUser from './component/02_Sesion/empresa/create'
import Session2 from './component/02_Sesion/cliente/Session2';
import Reset from './component/02_Sesion/reset';
import InicioClient from './component/03_Inicio/InicioClient';
import InicioAdmin from './component/04_InicioAdmin/InicioAdmin'
import Notfound from './component/09_Notfound/Notfound';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Notfound/>
  },
  {
    path: '/Session',
    element: <Session1/>
  },
  {
    path:'/createclient',
    element: <CreateUser/>
  },
  {
    path: '/reset',
    element: <Reset/>
  },
  {
    path: '/Client',
    element: <Session2/>
  },
  {
    path: '/Home',
    element: <InicioClient/>
  },
  {
    path: '/admin',
    element: <InicioAdmin/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </ChakraProvider>
)
