import React from "react";
import Navbar from "../../components/UserComponent/Navbar";
import Footer from "../../components/common/UserCommon/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChatBotCard from "../../components/UserComponent/ChatBotCard";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

const ChatBotPage = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  return (
    <>
      <Navbar />
      <main className="w-full max-h-max pt-20 bg-gray-200">
        <div className="flex  justify-center w-full h-1/4 px-18 ">
          <div className="w-1/2 h-44 flex justify-center px-20">
            <div className="">
              <h1
                className="text-6xl font-black font-poppins bg-gradient-to-r from-emerald-400 to-cyan-700 inline-block
                            text-transparent bg-clip-text
                            "
              >
                Hi There , {userInfo?.firstName}
              </h1>
              <h1
                className="text-6xl font-black font-poppins
                            bg-gradient-to-r from-emerald-400 to-cyan-700 inline-block
                            text-transparent bg-clip-text
                            "
              >
                Let's get you Started
              </h1>
              <div className="w-[260px] h-24 py-5  text-gray-400 rounded-md  text-lg">
                <h1>Use some of the common prompts , to get you started.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[150px]  mt-14 px-52 ">
          <div className="  h-full w-full flex justify-between px-10">
            <ChatBotCard color="bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
            <ChatBotCard color="bg-gradient-to-r from-fuchsia-600 to-pink-600" />
            <ChatBotCard color="bg-gradient-to-r from-fuchsia-600 to-purple-600" />
            <ChatBotCard color="bg-gradient-to-r from-fuchsia-500 to-pink-500" />
          </div>
        </div>

        <div className="flex w-full h-[350px]  mt-14 px-52 pb-20">
          <div className=" bg-white h-3/4 w-full rounded-md  p-5 s scroll-auto">

            <textarea className="outline-none w-full h-3/4"
            placeholder="Ask anyhing..."
            >
            </textarea>

            <div className=" flex justify-end items-end w-full h-10">
              <button className="w-20 h-full bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center rounded-md">
                  <TbArrowBigUpLineFilled fill="white" size={24}/>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChatBotPage;
