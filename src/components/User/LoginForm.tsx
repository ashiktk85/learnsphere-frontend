import { FcGoogle } from "react-icons/fc";
import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { login } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import login_video from "../../assets/loginpage_video.mp4";
import GoogleAuthButton from "./Google_Auth";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().trim()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().trim()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const loginResult = await dispatch(login(values)).unwrap();
        if (loginResult) {
          if (userInfo?.isBlocked) {
            toast.error("Currently, you are restricted from accessing the site.");
            return;
          }
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } catch (err: any) {
        toast.error(err.message || "An error occurred");
      }
    },
  });

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 lg:w-1/3 h-1/3 md:h-full">
        <div className="absolute top-[10%] left-[5%] md:top-[20%] md:left-[10%] text-white">
          <h1 className="text-2xl md:text-4xl font-bold my-2 md:my-4">
            Start your Learning Journey.
          </h1>
          <p className="text-sm md:text-xl font-normal">
            Start for free and explore thousands of courses.
          </p>
        </div>
        <video
          className="w-full h-full object-cover"
          src={login_video}
          autoPlay
          muted
          loop
          preload="auto"
        ></video>
      </div>

      <div className="flex-1 h-full bg-[#f5f5f5] p-8 md:pl-20 md:pr-8 md:py-16">
        <h1
          className="text-2xl md:text-3xl text-green-500 font-bold cursor-pointer mb-5"
          onClick={goToHome}
        >
          Learn Sphere
        </h1>

        <form className="w-full max-w-md mx-auto space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-black bg-transparent py-2 text-black outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-black bg-transparent py-2 text-black outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Remember Me</span>
            </label>
            <span className="text-sm underline cursor-pointer">Forgot Password?</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md"
          >
            Log In
          </button>
          <Link to="/signup">
            <button
              type="button"
              className="w-full border border-black bg-white text-black py-3 rounded-md mt-4"
            >
              Register
            </button>
          </Link>
        </form>
        <div className="text-center mt-4">
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
