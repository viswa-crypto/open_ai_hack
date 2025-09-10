import React, { useState } from 'react';
import { Megaphone, Palette, Mail, Share2, BarChart3, Target, Download, Eye, Play, Star } from 'lucide-react';

const Marketing = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const marketingTools = [
    {
      id: 1,
      name: 'Social Media Campaign Builder',
      category: 'Social Media',
      description: 'Create engaging posts for all major social platforms with AI-powered content generation',
      features: ['Multi-platform posting', 'AI content generation', 'Hashtag optimization', 'Analytics tracking'],
      price: 'Free',
      rating: 4.8,
      downloads: '12.5K',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Email Marketing Suite',
      category: 'Email',
      description: 'Professional email templates and automation tools for customer engagement',
      features: ['Drag-drop builder', 'Automation workflows', 'A/B testing', 'Performance analytics'],
      price: '$29/month',
      rating: 4.9,
      downloads: '8.3K',
      image: 'https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'Brand Identity Kit',
      category: 'Branding',
      description: 'Complete branding package including logo, colors, fonts, and brand guidelines',
      features: ['Logo variations', 'Color palettes', 'Typography guide', 'Brand guidelines'],
      price: '$99 one-time',
      rating: 4.7,
      downloads: '15.2K',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 4,
      name: 'Content Calendar Planner',
      category: 'Content',
      description: 'Plan, schedule, and manage your content across all marketing channels',
      features: ['Calendar view', 'Content templates', 'Team collaboration', 'Publishing automation'],
      price: '$19/month',
      rating: 4.6,
      downloads: '9.7K',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 5,
      name: 'SEO Optimization Toolkit',
      category: 'SEO',
      description: 'Boost your search rankings with keyword research and optimization tools',
      features: ['Keyword research', 'On-page optimization', 'Competitor analysis', 'Rank tracking'],
      price: '$49/month',
      rating: 4.8,
      downloads: '6.8K',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 6,
      name: 'Video Marketing Creator',
      category: 'Video',
      description: 'Create professional marketing videos with templates and stock footage',
      features: ['Video templates', 'Stock footage library', 'Text animations', 'Music library'],
      price: '$39/month',
      rating: 4.5,
      downloads: '4.1K',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Product Launch Campaign',
      type: 'Complete Campaign',
      duration: '30 days',
      channels: ['Social Media', 'Email', 'PR'],
      description: 'End-to-end campaign package for successful product launches',
      includes: ['Pre-launch buzz', 'Launch day promotion', 'Post-launch follow-up'],
      price: '$299'
    },
    {
      id: 2,
      name: 'Brand Awareness Boost',
      type: 'Social Campaign',
      duration: '14 days',
      channels: ['Instagram', 'Facebook', 'Twitter'],
      description: 'Increase brand visibility and recognition across social platforms',
      includes: ['Content creation', 'Hashtag strategy', 'Influencer outreach'],
      price: '$199'
    },
    {
      id: 3,
      name: 'Lead Generation Sprint',
      type: 'Performance Campaign',
      duration: '21 days',
      channels: ['LinkedIn', 'Email', 'Google Ads'],
      description: 'Generate qualified leads for B2B businesses',
      includes: ['Landing pages', 'Lead magnets', 'Email sequences'],
      price: '$399'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Instagram Story Templates',
      category: 'Social Media',
      count: 25,
      preview: 'https://images.pexels.com/photos/4050298/pexels-photo-4050298.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      name: 'Email Newsletter Designs',
      category: 'Email',
      count: 18,
      preview: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 3,
      name: 'Business Card Templates',
      category: 'Branding',
      count: 32,
      preview: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 4,
      name: 'LinkedIn Post Templates',
      category: 'Social Media',
      count: 20,
      preview: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const categories = ['all', 'Social Media', 'Email', 'Branding', 'Content', 'SEO', 'Video'];

  const filteredTools = activeCategory === 'all' 
    ? marketingTools 
    : marketingTools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Marketing & Branding Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional marketing tools, templates, and campaigns to build your brand 
            and grow your business. Everything you need to market like a pro.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-center">
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Marketing Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-90">Templates</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-90">Campaign Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Tool Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category === 'all' ? 'All Tools' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Marketing Tools Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tool.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                  
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {tool.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          +{tool.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{tool.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{tool.downloads}</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{tool.price}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                      Get Tool
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready-to-Launch Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                      {campaign.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{campaign.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{campaign.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 mb-1">Channels:</p>
                    <div className="flex flex-wrap gap-1">
                      {campaign.channels.map((channel, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-1">Includes:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {campaign.includes.map((item, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <span className="text-green-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{campaign.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Launch Campaign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Template Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{template.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{template.count} templates</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {template.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              View All Templates
            </button>
          </div>
        </div>

        {/* Marketing Resources */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Marketing Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">
                Track campaign performance across all channels with detailed analytics and insights.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                View Analytics
              </button>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Megaphone className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Manager</h3>
              <p className="text-gray-600 text-sm mb-4">
                Plan, execute, and manage all your marketing campaigns from one central hub.
              </p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600 transition-colors">
                Manage Campaigns
              </button>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Builder</h3>
              <p className="text-gray-600 text-sm mb-4">
                Create a cohesive brand identity with our comprehensive branding toolkit.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                Build Brand
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;