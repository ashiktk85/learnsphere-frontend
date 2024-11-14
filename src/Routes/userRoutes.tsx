// import React from 'react';
// import {Navigate ,Route , Routes ,Router } from 'react-router-dom'
// import Home from '../pages/User/HomePage';
// import OtpForm from '../components/UserComponent/OtpForm';
// import OtpPage from '../pages/User/OtpPage';
// import UserLogin from '../pages/User/LoginPage';
// import ProfilePage from '../pages/User/ProfilePage';
// import SignUp from '../pages/User/SignupPage';
// import UserProtector from '../services/UserProtector';
// import AllCourses from '../pages/User/AllCourses';
// import CourseDetailsPage from '../pages/User/CourseDetailsPage';
// import Checkout from '../pages/User/Checkout';

import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import OtpPage from "../pages/User/OtpPage";
import UserLogin from "../pages/User/LoginPage";
import UserProtector from "../services/UserProtector";
import ProfilePage from "../pages/User/Profile";
import SignUp from "../pages/User/SignupPage";
import AllCourses from "../pages/User/AllCourses";
import CourseDetailsPage from "../pages/User/CourseDetailsPage";
import Checkout from "../pages/User/Checkout";
import CoursePlayer2 from "../pages/User/CoursePlayer2";
import MyCourses from "../pages/User/MyCourses";
import Community from "../pages/User/Community";
import TutorsPage from "../pages/User/TutorsPage";
import TutorDetails from "../pages/User/TutorDetails";
import MyOrders from "../pages/User/MyOrders";
import ChatBotPage from "../pages/User/ChatBotPage";

// import MyCourses from '../pages/User/MyCourses';
// import Community from '../pages/User/Community';
// import TutorsPage from '../pages/User/TutorsPage';
// import TutorDetails from '../pages/User/TutorDetails';
// import CoursePlayer2 from '../pages/User/CoursePlayer2';
// import MyOrders from '../pages/User/MyOrders';
// import ChatBotPage from '../pages/User/ChatBotPage';
// import BlockChecker from '../services/BlockChecker';

// import OrderHistory from '../pages/UserPages/OrderHistory';

const UserRoutes = () => {
 
    
    return (
       <>
        <Routes >
                <Route path = '' element = {<Home />} />
            
                <Route path= '/otp' element = {<OtpPage /> } />
                <Route path= "/login" element ={<UserLogin />} />
                <Route path= '/profile' element = {<UserProtector><ProfilePage /></UserProtector>} />
                <Route path= '/signup' element = {<SignUp />} />
                <Route path = '/coursesPage' element = {<AllCourses />} />
                <Route path = '/courseDetails/:id' element = {<CourseDetailsPage />} />
                <Route path = '/checkout/:id' element = {<Checkout />} />
                <Route path = '/coursePlayer/:courseId' element = {<UserProtector> <CoursePlayer2 /> </UserProtector>} />
                <Route path = '/mycourses' element = {<UserProtector> <MyCourses /> </UserProtector>} />
                <Route path = '/community' element = {<UserProtector ><Community /></UserProtector>} />
                <Route path = '/tutors' element = {<TutorsPage />} />
                <Route path = '/tutorDetails/:id' element = {<TutorDetails />} />
                <Route path = '/my-orders/:userId' element = {<UserProtector> <MyOrders /></UserProtector>} />
                <Route path = '/chat-bot' element = {<ChatBotPage />} />
                {/* <Route path = '/orders' element = {<OrderHistory />} /> */}
        </Routes>
       </>
    );
}

export default UserRoutes;
