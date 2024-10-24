import React, { useEffect } from "react";
import Footer from "../../components/common/UserCommon/Footer";
import Navbar from "../../components/UserComponent/Navbar"
import Banner from "../../components/common/UserCommon/HomeBanner";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import bannerVector from '../../assets/userbanner/freepik-export-20240804125951Lu85.jpeg'
import BlockChecker from "../../services/BlockChecker";
import Home2 from "../../components/UserComponent/Home2nd";
import HomeCard from "../../components/UserComponent/Card";
import HeroSection from "../../components/UserComponent/HeroSection";
import CoursesHome from "../../components/UserComponent/CoursesHome";
import About from "../../components/UserComponent/About";
import Mission from "../../components/UserComponent/mission";
import PreLoader from "../../components/common/preLoader";
import Features from "../../components/UserComponent/Features";

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
