import Home from './pages/User/Home';
import SignUp from './pages/User/SignupPage'
import UserLogin from "./pages/User/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OtpPage from './pages/User/OtpPage';
import ProfilePage from './pages/User/Profile';
import AdminLogin from './pages/Admin/AdminloginPage';

import TVScreen from './components/common/UserCommon/404';
import UserList from './pages/Admin/UserListPage';
import UserRoutes from './Routes/userRoutes';
import AdminRoutes from './Routes/adminRoutes';
import TutorRoutes from './Routes/tutorRoutes';
import {NextUIProvider} from "@nextui-org/react";
import { useEffect } from 'react';
import { refreshAccessToken } from './redux/actions/authAciton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import BlockChecker from './services/BlockChecker';

function App() {
//  BlockChecker()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
   
    dispatch(refreshAccessToken());
  }, [dispatch]);
  
  return (
    <NextUIProvider>
  
    <Router>
      <Routes>
        <Route path='/404' Component={TVScreen} />

        //user Routes
        <Route path = '/*' element = {<UserRoutes />} />

        // Admin Routes
        <Route path = '/admin/*' element={<AdminRoutes />} />

        //Tutor Routes 
        <Route path = '/tutor/*' element = {<TutorRoutes />} />
        
      </Routes>
    </Router>
    </NextUIProvider>
  
  );
}

export default App;


