import React from 'react';
import { BookOpen, Users, Award, ChevronRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => (
  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Learning Journey
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Access world-class courses, expert instructors, and a supportive community
            to accelerate your learning journey.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
              Get Started <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-600 transition-colors">
              Watch Demo <Play className="ml-2" size={20} />
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <img 
              src="/api/placeholder/600/400" 
              alt="Learning Platform Preview" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);





const CourseCard = ({ title, instructor, level, duration, price }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src="/api/placeholder/400/250" 
      alt={title} 
      className="w-full object-cover h-48"
    />
    <div className="p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{instructor}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">{price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const FeaturedCourses = () => (
  <div className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Featured Courses</h2>
        <button className="text-blue-600 font-semibold hover:text-blue-700">
          View All Courses
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <CourseCard
          title="Web Development Bootcamp"
          instructor="John Smith"
          level="Intermediate"
          duration="12 weeks"
          price="$499"
        />
        <CourseCard
          title="Data Science Fundamentals"
          instructor="Sarah Johnson"
          level="Beginner"
          duration="8 weeks"
          price="$399"
        />
        <CourseCard
          title="UI/UX Design Masterclass"
          instructor="Michael Chen"
          level="Advanced"
          duration="10 weeks"
          price="$599"
        />
      </div>
    </div>
  </div>
);

const CTASection = () => (
  <div className="bg-blue-600 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to Start Your Learning Journey?
      </h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Join thousands of learners who have transformed their careers with our platform.
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
        Get Started Today
      </button>
    </div>
  </div>
);

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Hero />
    <Features />
    <FeaturedCourses />
    <CTASection />
  </div>
);

export default LandingPage;