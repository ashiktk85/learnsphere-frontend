// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaRegHeart, FaBook } from "react-icons/fa";
// import { HiMiniUsers } from "react-icons/hi2";
// import Navbar from "../../components/UserComponent/Navbar";
// import Footer from "../../components/common/UserCommon/Footer";
// import { Base_URL } from "../../credentials";
// import { useNavigate } from "react-router-dom"; 
// import AccordionItem from "../../components/UserComponent/Accordian";
// import { MdOndemandVideo } from "react-icons/md";
// import BlockChecker from "../../services/BlockChecker";
// import userAxiosInstance from "../../config/axiosInstance/userInstance";

// interface Ivideo {
//   title: string;
//   videoUrl: string;
// }

// interface Isection {
//   title: string;
//   sectionTitle: string;
//   videos: Ivideo[];
// }

// interface IcourseData {
//   name: string;
//   description: string;
//   Category: string;
//   sections: Isection[];
//   tags: string[];
//   language: string;
//   ratings: number[];
//   comments: string[];
//   thumbnailUrl: string;
//   tutorName: string;
//   tutorBio: string;
//   education: string;
//   certifications: string[];
//   email: string;
//   courseId: string;
//   price: string | number;
//   users?: number
// }

// const CourseDetailsPage = () => {
//   BlockChecker()
//   const { id } = useParams<{ id: string }>();
//   const [courseData, setCourseData] = useState<IcourseData | null>(null);
//   const navigate = useNavigate(); 
// console.log("courese id", id);

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const response = await userAxiosInstance.get(`/getCourse/${id}`);
//         setCourseData(response.data);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };
//     fetchCourseData();
//   }, [id]);

//   const handleEnroll = () => {
//     const userToken = localStorage.getItem('accessToken');
//     if(!userToken) return navigate('/login')
//     navigate(`/checkout/${courseData?.courseId}`)
//   };
//   const totalSections = courseData?.sections.length || 0;
//   const totalVideos = courseData?.sections.reduce(
//     (total, section) => total + section.videos.length,
//     0
//   );

//   return (
//     <>
//       <Navbar />
//       <main className="relative max-h-min">
//         <div className="flex">
//           <div className="w-3/4 mt-10">
//             <section className="h-1/2 py-20 pl-20 pr-10 text-black flex flex-col gap-5">
//               <h1 className="text-xl font-bold">{courseData?.name}</h1>
//               <div className="w-full flex gap-20">
//                 <p>Ratings: {courseData?.ratings.length}</p>
//                 <div className="flex gap-5">

//                 <HiMiniUsers size={20} /> 
//                 {courseData?.users}
//                 </div>
               
//                 <div className="flex gap-5 ">
//                 <FaBook size={20}/>
//                 {totalVideos}
//                 </div>
               
//               </div>
//               <p className="font-normal text-gray-500">
//                 {courseData?.description}
//               </p>
//             </section>
//             <section className="w-full max-w-2xl mx-auto px-4">
//               <h1 className="text-lg font-bold mb-4">Course Content</h1>
//               <div>
//                 {(courseData?.sections &&
//                   courseData.sections.map((section, index) => (
//                     <AccordionItem key={section.title} title={section.title}>
//                       {section.videos.length > 0 ? (
//                         section.videos.map((video, videoIndex) => (
//                           <div
//                             className="flex items-center gap-2 p-2 "
//                             key={videoIndex}
//                           >
//                             <MdOndemandVideo className="text-xl" />
//                             <span className="flex-1">{video.title}</span>
//                           </div>
//                         ))
//                       ) : (
//                         <div>No videos available</div>
//                       )}
//                     </AccordionItem>
//                   ))) || <div>No sections available</div>}
//               </div>
//             </section>
//           </div>

//           <div className="h-1/2 w-1/2 py-20 mt-10">
//             <section className="h-auto w-[450px] border-[1.5px] border-gray-300 rounded-md p-3">
//               <img
//                 src={courseData?.thumbnailUrl}
//                 className="w-full h-60 rounded-md"
//                 alt={`${courseData?.name} Thumbnail`}
//               />
//               <h1 className="text-lg font-medium">
//                 {courseData?.price ? (
//                   <p className="px-5 py-3"> {"price : "+courseData.price}</p>
//                 ) : (
//                   <p className="text-green-500 px-5 py-3">Free</p>
//                 )}
//               </h1>

//               <div className="w-full px-3 flex gap-4 justify-center">
//                 <button
//                   className="bg-gradient-to-r from-rose-400 to-red-500 h-10 w-full rounded-md text-md font-semibold text-white"
//                   onClick={handleEnroll}
//                 >
//                   Enroll Now
//                 </button>
//                 <div className="h-10 border-[1px] border-black w-[50px] rounded-md flex justify-center py-2 cursor-pointer">
//                   <FaRegHeart size={20} />
//                 </div>
//               </div>
//               <div className="w-full px-3 py-5">
//                 <h1 className="font-medium py-2">This course includes</h1>
//                 <p className="text-sm text-gray-400">
//                   {totalSections} sections
//                 </p>
//                 <p className="text-sm text-gray-400">{totalVideos} videos</p>
//               </div>
//             </section>
//           </div>
//         </div>
    
     
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default CourseDetailsPage;

import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaRegHeart, FaBook, FaStar } from "react-icons/fa"
import { HiMiniUsers } from "react-icons/hi2"
import { MdOndemandVideo } from "react-icons/md"
 import Navbar from "../../components/UserComponent/Navbar";
import Footer from "../../components/common/UserCommon/Footer";
 import BlockChecker from "../../services/BlockChecker";
 import userAxiosInstance from "../../config/axiosInstance/userInstance";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordian"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

interface Ivideo {
  title: string
  videoUrl: string
}

interface Isection {
  title: string
  sectionTitle: string
  videos: Ivideo[]
}

interface IcourseData {
  name: string
  description: string
  Category: string
  sections: Isection[]
  tags: string[]
  language: string
  ratings: number[]
  comments: string[]
  thumbnailUrl: string
  tutorName: string
  tutorBio: string
  education: string
  certifications: string[]
  email: string
  courseId: string
  price: string | number
  users?: number
}

 const CourseDetailsPage = () => {
  BlockChecker()
  const { id } = useParams<{ id: string }>()
  const [courseData, setCourseData] = useState<IcourseData | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await userAxiosInstance.get(`/getCourse/${id}`)
        setCourseData(response.data)
      } catch (error) {
        console.error("Error fetching course data:", error)
      }
    }
    fetchCourseData()
  }, [id])

  const handleEnroll = () => {
    const userToken = localStorage.getItem('accessToken')
    if (!userToken) return navigate('/login')
    navigate(`/checkout/${courseData?.courseId}`)
  }

  const totalSections = courseData?.sections.length || 0
  const totalVideos = courseData?.sections.reduce(
    (total, section) => total + section.videos.length,
    0
  ) || 0

  const averageRating = courseData?.ratings.length
    ? (courseData.ratings.reduce((a, b) => a + b, 0) / courseData.ratings.length).toFixed(1)
    : 'N/A'

  return (
    <>
      <Navbar />
    <div className="h-screen flex flex-col my-20">
    
      <main className="flex-grow bg-gray-50 ">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{courseData?.name}</h1>
              <p className="text-gray-600 mb-6">{courseData?.description}</p>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary">
                  <FaStar className="mr-1" />
                  {averageRating}
                </Badge>
                <Badge variant="secondary">
                  <HiMiniUsers className="mr-1" />
                  {courseData?.users || 0} students
                </Badge>
                <Badge variant="secondary">
                  <FaBook className="mr-1" />
                  {totalVideos} lessons
                </Badge>
              </div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Course Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {courseData?.sections.map((section, index) => (
                      <AccordionItem value={`section-${index}`} key={index}>
                        <AccordionTrigger>{section.title}</AccordionTrigger>
                        <AccordionContent>
                          {section.videos.map((video, videoIndex) => (
                            <div key={videoIndex} className="flex items-center space-x-2 py-2">
                              <MdOndemandVideo className="text-gray-500" />
                              <span>{video.title}</span>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>About the Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" alt={courseData?.tutorName} />
                      <AvatarFallback>{courseData?.tutorName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{courseData?.tutorName}</h3>
                      <p className="text-sm text-gray-500">{courseData?.education}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{courseData?.tutorBio}</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <img
                    src={courseData?.thumbnailUrl || "/placeholder.svg"}
                    alt={courseData?.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">
                    {courseData?.price ? `$${courseData.price}` : "Free"}
                  </div>
                 
                  <Button variant="outline" className="w-full" onClick={handleEnroll}>
                    <FaRegHeart className="mr-2" /> Enroll Now
                  </Button>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-gray-500">
                    <p>{totalSections} sections</p>
                    <p>{totalVideos} videos</p>
                    <p>Language: {courseData?.language}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default CourseDetailsPage;
