import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//configured routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <RouterProvider router={router}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
