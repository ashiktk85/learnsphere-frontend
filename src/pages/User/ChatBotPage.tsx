import React, { useState } from "react";
import Footer from "../../components/common/UserCommon/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { FaUserGraduate, FaUsers, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/User/Navbar";

const ChatBotPage = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>([]);
  const [input, setInput] = useState("");

  const commonPrompts = [
    { text: "How to become a tutor?", icon: <FaUserGraduate /> },
    { text: "How to join the community?", icon: <FaUsers /> },
    { text: "How to enroll in a course?", icon: <FaBook /> },
  ];

  const sendMessage = async () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { user: true, text: input }]);
    setInput("");

    const botResponse = await getBotResponse(input);
    setMessages((prev) => [...prev, { user: false, text: botResponse }]);
  };

  const getBotResponse = async (message: string) => {
    const responses = {
      "how to become a tutor?": `
        To become a tutor, first, visit the "Become a Tutor" section on the home page. You'll need to submit an application form along with necessary documents such as your qualifications and proof of identity. After submission, the admin team will review your application and might reach out for more details. Once approved, you’ll get an email with login credentials and further instructions. After logging in, complete your KYC verification. Once verified, you can start creating and managing your courses from the dashboard and monitor your course performance.
      `,
      "how to join the community?": `
        To join the community, first enroll in a course. Once enrolled, head to the Community section accessible from the main menu. You’ll find different groups for each course, where you can connect with fellow learners. Inside the group, you can ask questions, share ideas, and discuss course topics. The community is also a great place to network, find study partners, and seek help with challenges you may face during the course.
      `,
      "how to enroll in a course?": `
        To enroll in a course, start by browsing through the courses page. You can filter courses by topic or difficulty. Once you find a course, click on it to see details. If you're ready to proceed, click the "Enroll" button. For free courses, you'll be enrolled immediately. For paid courses, you'll be directed to a secure payment page. After completing the payment, you’ll receive a confirmation and can access the course content under the "My Courses" section. You'll also receive updates and notifications throughout the course.
      `,
    };
  
    return responses[message.toLowerCase() as keyof typeof responses] ||
           "I’m here to help with learning-related questions!";
  };
  
  

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-20 bg-gray-100 flex flex-col items-center pb-40">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Hi There, {userInfo?.firstName}</h1>
          <p className="text-lg text-gray-500">Get started with some common questions!</p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap mb-8 px-4">
          {commonPrompts.map((prompt, index) => (
            <div
              key={index}
              onClick={() => setInput(prompt.text)}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 w-60 p-4 rounded-lg cursor-pointer shadow-lg transform transition hover:scale-105"
            >
              <div className="text-white flex items-center justify-center text-2xl mb-2">
                {prompt.icon}
              </div>
              <p className="text-white text-lg font-medium text-center">{prompt.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg w-3/5 h-[400px] overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`flex ${msg.user ? "justify-end" : "justify-start"}`} // Align entire message to the left or right
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`p-3 rounded-md max-w-md ${
                    msg.user ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center border-t border-gray-300 p-4">
            <textarea
              className="flex-1 resize-none border rounded-md p-3 mr-3 text-gray-800 outline-none focus:border-indigo-500"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full text-white hover:shadow-lg transition transform hover:scale-105"
            >
              <TbArrowBigUpLineFilled size={24} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChatBotPage;
