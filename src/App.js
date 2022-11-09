
// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Authcontex } from './AllContex/Usercontex';

import AddProduct from './Components/AddProduct/AddProduct';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Myreviews from './Components/Myreviews/Myreviews';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import SingUp from './Components/SingUp/SingUp';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  // const data = useContext(Authcontex)
  
  const route = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        {
          path: 'home', element: <Home />,
        },
        { path: '/myreviews', element: <PrivateRoute><Myreviews /></PrivateRoute> },

        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SingUp /> },
        {
          path: '/services', element: <Services />,
          loader: () => fetch('https://youtuber-server-ten.vercel.app/services')
        },

        {
          path: '/details/:id', element: <ServiceDetails />,
          loader: ({ params }) => fetch(`https://youtuber-server-ten.vercel.app/services/${params.id}`)
        },
        { path: '*', element: <h1>404 not found</h1> },
        { path: '/addproduct', element: <PrivateRoute> <AddProduct /></PrivateRoute> }




      ]
    },
  ])
  return (
    <RouterProvider router={route}>
        <ToastContainer />
    </RouterProvider>
  );
}

export default App;
