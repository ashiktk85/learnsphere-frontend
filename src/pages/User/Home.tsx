import React, { useEffect } from "react";
import Footer from "../../components/common/UserCommon/Footer";

import Banner from "../../components/common/UserCommon/HomeBanner";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import bannerVector from '../../assets/userbanner/freepik-export-20240804125951Lu85.jpeg'
import BlockChecker from "../../services/BlockChecker";

import PreLoader from "../../components/common/preLoader";
import Features from "../../components/User/Features";
import CoursesHome from "../../components/User/CoursesHome";

import HeroSection from "../../components/User/HeroSection";
import About from "../../components/User/About";
import Navbar from "../../components/User/Navbar";


const Home: React.FC = () => {

  BlockChecker();
 

  return (
    <>
   <PreLoader />
    <main className="overflow-y-hidden  antialiased relative">
     <HeroSection />
     <Navbar />
     <About />
    
    <CoursesHome />
    <Features />
    <Footer />
   
    </main>
    </>
  );
};

export default Home;
