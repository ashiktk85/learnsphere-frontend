
import { BookOpen, Users, Award, ChevronRight, Play, CheckCircle } from 'lucide-react';
 const Features = () => (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our platform the perfect choice for your learning journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={BookOpen}
            title="Expert-Led Courses"
            description="Learn from industry experts with real-world experience and comprehensive curriculum."
          />
          <FeatureCard
            icon={Users}
            title="Community Learning"
            description="Join a vibrant community of learners and engage in collaborative projects."
          />
          <FeatureCard
            icon={Award}
            title="Certified Learning"
            description="Earn recognized certificates upon completion of your courses."
          />
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description  }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  export default Features;