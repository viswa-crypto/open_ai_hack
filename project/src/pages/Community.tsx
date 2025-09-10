import React, { useState } from 'react';
import { MessageSquare, Users, TrendingUp, Heart, Reply, Share, BookOpen, Calendar, Award } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for scaling a SaaS startup',
      author: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      category: 'SaaS',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      isHot: true,
      preview: 'I\'m looking for advice on scaling our SaaS platform. We\'ve reached 1000 users and need guidance on infrastructure, team building, and customer retention...'
    },
    {
      id: 2,
      title: 'E-commerce conversion optimization tips',
      author: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      category: 'E-commerce',
      replies: 18,
      likes: 32,
      timeAgo: '4 hours ago',
      isHot: false,
      preview: 'Sharing some tactics that increased our conversion rate from 2.1% to 4.8% in 3 months. Would love to hear what has worked for others...'
    },
    {
      id: 3,
      title: 'Funding options for hardware startups',
      author: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      category: 'Hardware',
      replies: 31,
      likes: 67,
      timeAgo: '6 hours ago',
      isHot: true,
      preview: 'Hardware startups face unique challenges when raising capital. Here\'s what I learned from raising $2M for our IoT device...'
    },
    {
      id: 4,
      title: 'Legal considerations for international expansion',
      author: 'David Kim',
      avatar: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      category: 'Legal',
      replies: 15,
      likes: 28,
      timeAgo: '1 day ago',
      isHot: false,
      preview: 'Planning to expand to European markets. What legal frameworks and compliance requirements should I be aware of?...'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Jennifer Walsh',
      title: 'Former VP of Growth at Stripe',
      avatar: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      expertise: ['Fintech', 'Growth', 'Product'],
      rating: 4.9,
      sessions: 247,
      price: '$200/hour'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      title: 'Serial Entrepreneur & Angel Investor',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      expertise: ['Fundraising', 'Strategy', 'B2B Sales'],
      rating: 4.8,
      sessions: 189,
      price: '$150/hour'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      title: 'Marketing Director at Shopify',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      expertise: ['Marketing', 'E-commerce', 'Brand'],
      rating: 5.0,
      sessions: 156,
      price: '$180/hour'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: 'March 15, 2025',
      time: '6:00 PM PST',
      type: 'Virtual Event',
      attendees: 127,
      description: 'Present your startup to investors and get feedback from industry experts.'
    },
    {
      id: 2,
      title: 'Product-Market Fit Workshop',
      date: 'March 20, 2025',
      time: '2:00 PM PST',
      type: 'Workshop',
      attendees: 85,
      description: 'Interactive workshop on achieving and measuring product-market fit.'
    },
    {
      id: 3,
      title: 'Women in Tech Networking',
      date: 'March 25, 2025',
      time: '7:00 PM PST',
      type: 'Networking',
      attendees: 203,
      description: 'Connect with successful women entrepreneurs and tech leaders.'
    }
  ];

  const categories = ['All', 'SaaS', 'E-commerce', 'Hardware', 'Fintech', 'Healthcare', 'Legal', 'Marketing'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entrepreneur Community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, learn, and grow with thousands of entrepreneurs worldwide. 
            Share knowledge, get mentorship, and build lasting business relationships.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12,547</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <MessageSquare className="h-8 w-8 text-teal-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3,249</div>
            <div className="text-sm text-gray-600">Discussions</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-sm text-gray-600">Expert Mentors</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Calendar className="h-8 w-8 text-teal-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">48</div>
            <div className="text-sm text-gray-600">Monthly Events</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md mx-auto">
          {['discussions', 'mentors', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discussion List */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{discussion.title}</h3>
                          {discussion.isHot && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">Hot</span>
                          )}
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {discussion.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{discussion.preview}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{discussion.author}</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{discussion.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Reply className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{discussion.replies}</span>
                            </div>
                            <Share className="h-4 w-4 text-gray-400 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Start a Discussion</h3>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  New Post
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-teal-500" />
                    <span className="text-sm text-gray-700">AI in Business</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-teal-500" />
                    <span className="text-sm text-gray-700">Remote Team Building</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-teal-500" />
                    <span className="text-sm text-gray-700">Series A Fundraising</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mentors Tab */}
        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm">{mentor.title}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{mentor.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{mentor.sessions}</div>
                    <div className="text-xs text-gray-600">Sessions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{mentor.price}</div>
                    <div className="text-xs text-gray-600">Per Hour</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {event.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{event.attendees}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date} • {event.time}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;