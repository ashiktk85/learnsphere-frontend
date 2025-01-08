import React from "react";
import Navbar from "../../components/common/UserCommon/Navbar";
import Footer from "../../components/common/UserCommon/Footer";
import LoginForm from "../../components/User/LoginForm";

const UserLogin: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5]">
        <LoginForm />
        <Footer />
      </div>
    </>
  );
};

export default UserLogin;
