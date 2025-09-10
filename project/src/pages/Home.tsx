import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Target, Users, TrendingUp, Star, CheckCircle, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "AI Business Mentor",
      description: "Get personalized guidance from our AI-powered mentor available 24/7 to help you navigate every aspect of your business journey."
    },
    {
      icon: <Target className="h-8 w-8 text-teal-500" />,
      title: "Profitability Calculator",
      description: "Advanced analytics and calculators to forecast your business profitability, ROI, and growth potential with real-time data."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Smart Marketplace",
      description: "Connect with verified suppliers, buyers, and partners through our intelligent matching system for raw materials and finished products."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
      title: "Franchise Connect",
      description: "Explore verified franchise opportunities with detailed ROI analysis, investment requirements, and direct franchisor connections."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Startup Founder",
      image: "https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "LaunchPad's AI mentor guided me through every step of launching my SaaS platform. Within 6 months, we reached profitability!"
    },
    {
      name: "Marcus Johnson",
      role: "E-commerce Entrepreneur",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "The marketplace connected me with the perfect suppliers. My e-commerce business grew 300% in the first year."
    },
    {
      name: "Emma Rodriguez",
      role: "Franchise Owner",
      image: "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "Found the perfect franchise opportunity through LaunchPad. The ROI analysis helped me make an informed decision."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}Ideas Into{" "}
            </span>
            Profitable Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who use our AI-powered platform to build, 
            scale, and succeed. Get mentorship, connect with suppliers, and access funding 
            all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools, connections, 
              and guidance you need to turn your business idea into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how entrepreneurs are transforming their businesses with LaunchPad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 10,000 entrepreneurs who trust LaunchPad to build successful businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;