
// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Authcontex } from './AllContex/Usercontex';
import './App.css';

import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import SingUp from './Components/SingUp/SingUp';

function App() {
  // const data = useContext(Authcontex)
  const route = createBrowserRouter([
      { path: '/', element: <Main />,children:[
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> ,
        
      },
        {path:'/profile', element:<Profile/>},
     
        {path:'/login', element:<Login/>},
        {path:'/signup', element:<SingUp/>},
        { path:'checkout/:id', element:<PrivateRoute><Checkout/></PrivateRoute>}
      ] },
  ])
  return (
  <RouterProvider router={route}> 
    
  </RouterProvider>
  );
}

export default App;
