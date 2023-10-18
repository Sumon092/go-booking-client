import App from '../App';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import {createBrowserRouter} from 'react-router-dom'
import Booking from '../pages/Booking';
import Profile from '../component/Profile';
import Dashboard from '../layout/Dashboard';
import ManageUser from '../component/Dashboard/ManageUser';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/bookings',
        element: <Booking />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children: [
      {
        path: 'user/profile',
        element: <Profile />,
      },
      {
        path: 'user/manage-user',
        element: <ManageUser />,
      },
      
    ]
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
