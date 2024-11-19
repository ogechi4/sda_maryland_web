import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import About from './Routes/About/About';
import { ErrorPage } from './error-page';
import Home from './routes/Home/Home';
import Root from './Root';


//configured routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </StrictMode>,
)
