import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Base_URL } from "../../credentials";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "sonner";


const storedUserInfo = localStorage.getItem('userInfo');
let userInfo
let userId
if(storedUserInfo) {
   userInfo = JSON.parse(storedUserInfo);
   userId = userInfo.userId;
}
const userAxiosInstance = axios.create({
  baseURL: Base_URL,
  withCredentials: true, 
  headers: userId ? { 'userId': userId } : {},
});

userAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if(error.response.data ===  "User Blocked") {
     
      
      return  toast.error("currently you are restricted.")
   
    }

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        
        await axios.post(`${Base_URL}/refresh-token`, {}, {
          withCredentials: true,
        });

       
        return userAxiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
       
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default userAxiosInstance;

