import React from 'react';
import {Navigate ,Route , Routes ,Router } from 'react-router-dom'
import UserProtector from '../services/UserProtector';
import TutorHome from '../pages/Tutor/TutorHome';
import TutorApplicationPage from '../pages/Tutor/TutorApplicationPage';
import ApplicationFinished from '../pages/Tutor/ApplicationFinished';
import TutorLogin from '../pages/Tutor/TutorLogin';
import TutorDashboard from '../pages/Tutor/TutorDashboard';
import AddSection from '../components/TutorComponent/CourseAddsection';
import CourseEdit from '../pages/Tutor/CourseEdit';
import KycPage from '../pages/Tutor/KycPage';


const TutorRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '' element = {<UserProtector> <TutorHome /> </UserProtector>} />
                <Route path = '/application' element = {<UserProtector > <TutorApplicationPage /> </UserProtector>} />
                <Route path = '/applicationcompleted' element = {<UserProtector > <ApplicationFinished /> </UserProtector>} />
                <Route path=  '/login' element = {<UserProtector> <TutorLogin /> </UserProtector>} />
                <Route path='/dashboard' element = {<UserProtector> <TutorDashboard /> </UserProtector>} />
                <Route path = '/course-edit/:id' element = {<UserProtector> <CourseEdit /> </UserProtector>} />
                <Route path = '/kyc' element = {<UserProtector> <KycPage /> </UserProtector>} />
            </Routes>
        </div>
    );
}

export default TutorRoutes;
