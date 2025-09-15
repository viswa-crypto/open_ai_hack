import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Target, Star, Calendar, BarChart3, PieChart, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const InvestorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('opportunities');

  const stats = [
    {
      title: 'Portfolio Value',
      value: '$2.4M',
      change: '+12.5% this quarter',
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: 'Active Investments',
      value: '18',
      change: '+3 new this month',
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Portfolio ROI',
      value: '24.8%',
      change: '+2.1% vs last quarter',
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
    },
    {
      title: 'Startups Funded',
      value: '45',
      change: 'Lifetime total',
      icon: <Users className="h-8 w-8 text-purple-600" />,
    },
  ];

  const opportunities = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      industry: 'CleanTech',
      stage: 'Series A',
      seeking: '$2.5M',
      valuation: '$12M',
      traction: '500K ARR',
      team: 'Ex-Tesla, Stanford',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 2,
      name: 'HealthAI Platform',
      industry: 'HealthTech',
      stage: 'Seed',
      seeking: '$1.2M',
      valuation: '$6M',
      traction: '10K users',
      team: 'Ex-Google Health',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      id: 3,
      name: 'FinanceFlow',
      industry: 'FinTech',
      stage: 'Series B',
      seeking: '$8M',
      valuation: '$45M',
      traction: '$2M ARR',
      team: 'Ex-Goldman Sachs',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const investments = [
    {
      id: 1,
      company: 'TechStart Inc.',
      industry: 'SaaS',
      invested: '$250K',
      currentValue: '$420K',
      roi: '+68%',
      status: 'Growing',
      lastUpdate: '2 days ago'
    },
    {
      id: 2,
      company: 'GreenEnergy Co.',
      industry: 'CleanTech',
      invested: '$500K',
      currentValue: '$750K',
      roi: '+50%',
      status: 'Stable',
      lastUpdate: '1 week ago'
    },
    {
      id: 3,
      company: 'MedTech Solutions',
      industry: 'HealthTech',
      invested: '$300K',
      currentValue: '$280K',
      roi: '-6.7%',
      status: 'Recovering',
      lastUpdate: '3 days ago'
    }
  ];

  const franchiseOpportunities = [
    {
      id: 1,
      name: 'QuickBite Fast Food',
      investment: '$150K - $300K',
      roi: '18-24 months',
      locations: 450,
      growth: '+25%',
      rating: 4.8
    },
    {
      id: 2,
      name: 'FitZone Gym Studios',
      investment: '$200K - $500K',
      roi: '24-36 months',
      locations: 320,
      growth: '+30%',
      rating: 4.9
    }
  ];

  const getROIColor = (roi: string) => {
    if (roi.startsWith('+')) return 'text-green-600';
    if (roi.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600 mt-2">
            Track your investments, discover new opportunities, and manage your portfolio.
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

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-lg">
          {['opportunities', 'portfolio', 'analytics', 'franchises'].map((tab) => (
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

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={opportunity.image}
                  alt={opportunity.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{opportunity.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{opportunity.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Industry</p>
                      <p className="font-medium text-gray-900">{opportunity.industry}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Stage</p>
                      <p className="font-medium text-gray-900">{opportunity.stage}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Seeking</p>
                      <p className="font-medium text-gray-900">{opportunity.seeking}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Valuation</p>
                      <p className="font-medium text-gray-900">{opportunity.valuation}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-1">Traction</p>
                    <p className="text-sm font-medium text-green-600">{opportunity.traction}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-1">Team</p>
                    <p className="text-sm text-gray-700">{opportunity.team}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Investment Portfolio</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invested</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {investments.map((investment) => (
                    <tr key={investment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{investment.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.industry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.invested}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{investment.currentValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className={getROIColor(investment.roi)}>{investment.roi}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          investment.status === 'Growing' ? 'bg-green-100 text-green-800' :
                          investment.status === 'Stable' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {investment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.lastUpdate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">View Report</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
              <div className="h-64 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-600">Performance Chart</p>
                  <p className="text-sm text-gray-500">Interactive analytics coming soon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Distribution</h3>
              <div className="h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <p className="text-gray-600">Distribution Chart</p>
                  <p className="text-sm text-gray-500">Sector allocation breakdown</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Average Deal Size</p>
                  <p className="text-2xl font-bold text-gray-900">$285K</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-green-600">73%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Avg. Time to Exit</p>
                  <p className="text-2xl font-bold text-blue-600">4.2 years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total IRR</p>
                  <p className="text-2xl font-bold text-purple-600">28.5%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Franchises Tab */}
        {activeTab === 'franchises' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {franchiseOpportunities.map((franchise) => (
              <div key={franchise.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{franchise.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{franchise.rating}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Investment Range</p>
                    <p className="font-medium text-gray-900">{franchise.investment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ROI Timeline</p>
                    <p className="font-medium text-gray-900">{franchise.roi}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Locations</p>
                    <p className="font-medium text-gray-900">{franchise.locations}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Growth Rate</p>
                    <p className="font-medium text-green-600">{franchise.growth}</p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  View Franchise Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard;