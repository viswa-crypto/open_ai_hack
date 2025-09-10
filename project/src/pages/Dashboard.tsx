import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Calculator, BookOpen, Target, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  const [selectedTool, setSelectedTool] = useState('overview');

  const stats = [
    {
      title: 'Business Plans Generated',
      value: '12',
      change: '+2 this month',
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Profit Forecasts',
      value: '$250K',
      change: '+15% growth',
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
    },
    {
      title: 'Marketplace Connections',
      value: '45',
      change: '+8 new contacts',
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Revenue Potential',
      value: '$500K',
      change: '12-month projection',
      icon: <DollarSign className="h-8 w-8 text-teal-500" />,
    },
  ];

  const tools = [
    {
      id: 'calculator',
      title: 'Profitability Calculator',
      description: 'Calculate ROI, break-even, and growth projections',
      icon: <Calculator className="h-6 w-6" />,
    },
    {
      id: 'planner',
      title: 'Business Plan Generator',
      description: 'Create comprehensive business plans with AI assistance',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      id: 'analytics',
      title: 'Growth Analytics',
      description: 'Track performance and identify opportunities',
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      id: 'mentor',
      title: 'AI Mentor Chat',
      description: '24/7 business guidance and strategy advice',
      icon: <MessageSquare className="h-6 w-6" />,
    },
  ];

  const ProfitabilityCalculator = () => {
    const [inputs, setInputs] = useState({
      revenue: '',
      costs: '',
      investment: '',
    });

    const handleCalculate = () => {
      const profit = parseFloat(inputs.revenue) - parseFloat(inputs.costs);
      const roi = ((profit / parseFloat(inputs.investment)) * 100).toFixed(2);
      alert(`Projected Profit: $${profit.toLocaleString()}\nROI: ${roi}%`);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Profitability Calculator</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Revenue ($)
            </label>
            <input
              type="number"
              value={inputs.revenue}
              onChange={(e) => setInputs({ ...inputs, revenue: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="500000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Operating Costs ($)
            </label>
            <input
              type="number"
              value={inputs.costs}
              onChange={(e) => setInputs({ ...inputs, costs: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="300000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={inputs.investment}
              onChange={(e) => setInputs({ ...inputs, investment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="100000"
            />
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Calculate Profitability
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Entrepreneur Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's your business overview and tools to grow your venture.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-teal-600">{stat.change}</p>
                </div>
                <div className="flex-shrink-0">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Navigation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedTool === tool.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {tool.icon}
                  <h3 className="font-semibold text-gray-900">{tool.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Tool Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedTool === 'calculator' && <ProfitabilityCalculator />}
          
          {selectedTool === 'planner' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Plan Generator</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Generate comprehensive business plans tailored to your industry and goals.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Start New Business Plan
                </button>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recent Plans</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">E-commerce Startup Plan</span>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">SaaS Business Model</span>
                      <span className="text-xs text-gray-500">1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTool === 'analytics' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Growth Analytics</h3>
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Analytics Dashboard</p>
                    <p className="text-sm text-gray-500">Connect your data sources</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Connect Analytics
                </button>
              </div>
            </div>
          )}

          {selectedTool === 'mentor' && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI Business Mentor</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Get personalized business advice and strategy recommendations from our AI mentor.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Recent Advice:</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    "Consider expanding your marketing budget by 20% to capture more of the Q2 market opportunity..."
                  </p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Chat with AI Mentor
                </button>
              </div>
            </div>
          )}

          {/* Learning Hub */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Learning Hub</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Continue your entrepreneurial journey with curated courses.</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Marketing Fundamentals</h4>
                    <p className="text-sm text-gray-600">Progress: 65%</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Continue</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Planning for Startups</h4>
                    <p className="text-sm text-gray-600">Not started</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;