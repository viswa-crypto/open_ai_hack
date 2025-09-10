import React from 'react';
import { Rocket, Target, Users, Award, Mail, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP at Stripe with 15 years of fintech experience. Passionate about empowering entrepreneurs.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer with expertise in AI and machine learning. Building the future of business automation.',
      image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Growth',
      bio: 'Serial entrepreneur who has built and exited 3 startups. Expert in scaling businesses from 0 to 100M.',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Head of Partnerships',
      bio: 'Former head of partnerships at Y Combinator. Connected thousands of startups with investors.',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Mission-Driven',
      description: 'We exist to democratize entrepreneurship and make business success accessible to everyone, regardless of background or resources.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: 'Community First',
      description: 'Our platform thrives on the success of our community. We prioritize user needs and foster genuine connections between entrepreneurs.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from our AI technology to customer support and platform security.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-teal-500" />,
      title: 'Innovation',
      description: 'We continuously push boundaries with cutting-edge technology and creative solutions to solve real business problems.'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'LaunchPad Founded',
      description: 'Started with a vision to democratize entrepreneurship through technology.'
    },
    {
      year: '2022',
      title: 'AI Mentor Launch',
      description: 'Introduced our revolutionary AI-powered business mentor to guide entrepreneurs.'
    },
    {
      year: '2023',
      title: 'Marketplace Opens',
      description: 'Connected 10,000+ suppliers and buyers through our smart marketplace platform.'
    },
    {
      year: '2024',
      title: '$50M+ Funded',
      description: 'Our platform helped entrepreneurs raise over $50M in funding.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Now serving entrepreneurs in 25+ countries with localized support.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Entrepreneurs' },
    { number: '$2.4B', label: 'Total Business Value Created' },
    { number: '15,000+', label: 'Businesses Launched' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering the Next Generation of
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                {" "}Entrepreneurs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              LaunchPad is more than a platform – we're your partner in transforming innovative 
              ideas into profitable businesses. Our mission is to democratize entrepreneurship 
              through AI-powered guidance, smart connections, and comprehensive business tools.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every great idea deserves a chance to become a successful business. 
                Our mission is to break down the barriers that prevent talented individuals from 
                pursuing their entrepreneurial dreams.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through cutting-edge AI technology, comprehensive business tools, and a supportive 
                community, we're building the infrastructure for the future of entrepreneurship.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our platform's evolution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a global platform empowering entrepreneurs worldwide.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <span className="text-sm text-gray-500">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced entrepreneurs and technologists dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of entrepreneurs who are building the future with LaunchPad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Get Started Free
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                <Mail className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;