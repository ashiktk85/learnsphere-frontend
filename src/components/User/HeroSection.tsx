import React from 'react';
import blog from '../../assets/userbanner/blog-3_1296x.webp';
import overlayImage1 from '../../assets/userbanner/Web_Photo_Editor.jpg';
import overlayImage2 from '../../assets/userbanner/Web_Photo_Editor.jpg'; 
import { useNavigate } from 'react-router-dom';
import photography from '../../assets/userbanner/photography.webp'



const HeroSection = () => {
  const navigate = useNavigate();

  const goToCommunity = () => {
    navigate('/community');
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#f5f5f7] px-4 py-12 lg:py-0">
      <div className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left gap-6 lg:gap-8">
          <h1 className="text-4xl font-extrabold text-[#7BC74D] sm:text-5xl lg:text-6xl">
            Empower Your Learning Journey
          </h1>
          <p className="text-base text-[#393E46] sm:text-lg lg:text-xl">
            Access hundreds of courses and learn at your own pace. Start your journey with us today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:justify-start">
            <button className="rounded-full h-11 bg-[#17171a] px-6 py-2 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
              Get Started
            </button>
            <button 
              className="rounded-full border h-11 bg-[#EEEEEE] border-black px-6 py-2 text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 cursor-pointer text-center"
              onClick={goToCommunity}
            >
              Community
            </button>
          </div>
        </div>

        {/* Image Stack */}
        <div className="relative flex items-center justify-center">
          {/* Base Image */}
          <div className={`relative w-[280px] h-[250px] lg:w-[550px] lg:h-[450px] 
            transition-transform duration-500 transform hover:scale-110 hover:translate-y-[-10px] z-10`}>
            <img
              src={blog}
              alt="E-Learning Illustration"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-3 py-2 rounded-md shadow-md">
              <p className="text-sm font-semibold text-[#17171a]">Explore Our Courses</p>
            </div>
          </div>

          {/* Middle Image */}
          <div className={`relative w-[280px] h-[250px] lg:w-[550px] lg:h-[450px] 
            ml-[-25px] lg:ml-[-50px]
            transition-transform duration-500 transform hover:scale-110 hover:translate-y-[-20px] z-20`}>
            <img
              src={photography}
              alt="Overlay Image 1"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-3 py-2 rounded-md shadow-md">
              <p 
                className="text-sm font-semibold text-[#17171a] cursor-pointer"
                onClick={() => navigate('/tutors')}
              >
                Meet Our Tutors
              </p>
            </div>
          </div>

          {/* Front Image */}
          <div className={`relative w-[280px] h-[250px] lg:w-[550px] lg:h-[450px] 
            ml-[-25px] lg:ml-[-50px]
            transition-transform duration-500 transform hover:scale-110 hover:translate-y-[-30px] z-30`}>
            <img
              src={overlayImage2}
              alt="Overlay Image 2"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-3 py-2 rounded-md shadow-md cursor-pointer">
              <p className="text-sm font-semibold text-[#17171a]">
                Join Our Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;