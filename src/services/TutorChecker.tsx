import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { decrypt } from '../utils/encrption';

const tutorAuth  = () => {
    try {
        const navigate = useNavigate()
        const auth = decrypt(localStorage.getItem("tutorCredentials"))

        useEffect(() => {
            if(!auth) {
                navigate('/tutor/login')
            }
        }, [auth])
        
    } catch (error) {
        
    }
}
export default tutorAuth;
  