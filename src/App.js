
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
import Update from './Components/Update/Update';
import { Authcontex } from './AllContex/Usercontex';
import { useContext } from 'react';
import Loading from './Components/Loading/Loading';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';



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

        },

        {
          path: '/details/:id', element: <ServiceDetails />,
          loader: ({ params }) => fetch(`https://youtuber-server-ten.vercel.app/services/${params.id}`)
        },
        { path: '*', element: <Error /> },
        { path: '/addproduct', element: <PrivateRoute> <AddProduct /></PrivateRoute> },
          {
            path:'/updateproduct/:id',element:<PrivateRoute><Update/></PrivateRoute>,
            loader: ({ params }) => fetch(`https://youtuber-server-sojib076.vercel.app/reviews/${params.id}`)

        }, {
          path:'/blog', element:<Blog></Blog>
        }

      ]
    },
  ])
  const {loading} = useContext(Authcontex)  


  return (
    <RouterProvider router={route}>
        <ToastContainer />
    </RouterProvider>
  );
}

export default App;
