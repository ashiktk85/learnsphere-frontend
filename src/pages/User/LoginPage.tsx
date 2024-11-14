import React from 'react';
import Navbar from "../../components/common/UserCommon/Navbar";
import Footer from '../../components/common/UserCommon/Footer';
import LoginForm from '../../components/User/LoginForm';

const UserLogin: React.FC = () => {
  return (
    <>
    <div className="max-h-max bg-[#f5f5f5] text-wh">   
    <LoginForm />
    <Footer />
    </div>
    </>
  );
};




export default UserLogin
