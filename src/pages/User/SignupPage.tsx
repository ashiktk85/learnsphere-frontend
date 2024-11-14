import React  from "react";

import Navbar from '../../components/common/UserCommon/Navbar'
import Footer from "../../components/common/UserCommon/Footer";
import { Toaster, toast } from 'sonner'
import SignupForm from "../../components/User/SignupForm";

const SignUp : React.FC = () => {
    
    return (
        <div className='h-screen bg-[#f5f5f5]'>
           <Toaster position="top-center" richColors  />
            
          <SignupForm />
          
        </div>
    )
}

export default SignUp;