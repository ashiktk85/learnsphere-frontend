import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProtectorProps {
  children: ReactNode;
}

const UserProtector: React.FC<UserProtectorProps> = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('userInfo');

  useEffect(() => {
    if (!user) {
      navigate('/login', {
        state: { message: 'Authorization failed' },
        replace: true,
      });
    }
  }, [navigate, user]);

  return user ? <>{children}</> : null;
};

export default UserProtector;
