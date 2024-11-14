import React from 'react';
import {Navigate ,Route , Routes ,Router } from 'react-router-dom'
import AdminLogin from '../pages/Admin/AdminloginPage';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import UserList from '../pages/Admin/UserListPage';
import AdminNewTutorApplications from '../pages/Admin/ApplicationListPage';
import ApplicantDetails from '../pages/Admin/ApplicantDetailsPage';
import AdminProtector from '../services/AdminProtector';
import TutorList from '../pages/Admin/TutorListPage';
import CategoryList from '../components/Admin/CategoryList';
import AdminReportList from '../components/Admin/AdminReportList';
import ReportDetailComponent from '../components/Admin/ReportDetailComponent';
import AdminCoursesPage from '../pages/Admin/AdminCoursesPage';

const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                    <Route path = '' element = {<AdminLogin />} />
                    <Route path = '/dashboard' element ={ <AdminProtector> <AdminDashboard /> </AdminProtector>} />
                    <Route path = '/users' element={ <AdminProtector><UserList /></AdminProtector>} />
                    <Route path = '/tutorapplications' element={<AdminProtector><AdminNewTutorApplications /></AdminProtector>} />
                    <Route path=  '/applicationdetails' element={<AdminProtector><ApplicantDetails /></AdminProtector>} />
                    <Route path = '/tutors' element = {<AdminProtector> <TutorList /> </AdminProtector>} />
                    <Route path = '/category' element = {<AdminProtector> <CategoryList /></AdminProtector>} />
                    <Route path = '/reports' element = {<AdminProtector> <AdminReportList /> </AdminProtector>} />
                    <Route path = '/reportDetail/:id' element = {<AdminProtector><ReportDetailComponent /></AdminProtector>} /> 
                    <Route path = '/courses' element = {<AdminProtector> <AdminCoursesPage /></AdminProtector>} />
            </Routes>
        </div>
    );
}

export default AdminRoutes;
