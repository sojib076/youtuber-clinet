
// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Authcontex } from './AllContex/Usercontex';
import './App.css';


import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import SingUp from './Components/SingUp/SingUp';

function App() {
  // const data = useContext(Authcontex)
  const route = createBrowserRouter([
      { path: '/', element: <Main />,children:[
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> ,
      },
        {path:'/profile', element:<PrivateRoute><Profile/></PrivateRoute>},
     
        {path:'/login', element:<Login/>},
        {path:'/signup', element:<SingUp/>},
        {path:'/services', element:<Services/>, 
       loader:()=>fetch('http://localhost:5000/services')},

        {path:'/details/:id', element:<ServiceDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)},
      
       

      ] },
  ])
  return (
  <RouterProvider router={route}> 
    
  </RouterProvider>
  );
}

export default App;
