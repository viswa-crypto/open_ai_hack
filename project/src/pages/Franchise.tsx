import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, DollarSign, TrendingUp, Clock, Users, Shield, ArrowRight } from 'lucide-react';

const Franchise = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [investmentRange, setInvestmentRange] = useState('all');

  const franchises = [
    {
      id: 1,
      name: 'QuickBite Fast Food',
      category: 'Food & Beverage',
      investment: { min: 150000, max: 300000 },
      roi: '18-24 months',
      rating: 4.8,
      reviews: 234,
      locations: 450,
      growth: '+25%',
      verified: true,
      image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Fast-casual restaurant franchise specializing in healthy, quick meals with proven profitability.',
      benefits: ['Established brand', 'Training program', 'Marketing support', 'Territory protection']
    },
    {
      id: 2,
      name: 'FitZone Gym Studios',
      category: 'Health & Fitness',
      investment: { min: 200000, max: 500000 },
      roi: '24-36 months',
      rating: 4.9,
      reviews: 189,
      locations: 320,
      growth: '+30%',
      verified: true,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Modern fitness studio franchise with cutting-edge equipment and personalized training programs.',
      benefits: ['Equipment financing', '6-week training', 'Grand opening support', 'Ongoing coaching']
    },
    {
      id: 3,
      name: 'TechRepair Express',
      category: 'Technology',
      investment: { min: 75000, max: 150000 },
      roi: '12-18 months',
      rating: 4.7,
      reviews: 312,
      locations: 280,
      growth: '+35%',
      verified: true,
      image: 'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Mobile device and computer repair franchise with high-margin services and growing demand.',
      benefits: ['Low overhead', 'High margins', 'Growing market', 'Digital marketing']
    },
    {
      id: 4,
      name: 'CleanPro Services',
      category: 'Services',
      investment: { min: 50000, max: 100000 },
      roi: '8-15 months',
      rating: 4.6,
      reviews: 445,
      locations: 600,
      growth: '+20%',
      verified: true,
      image: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Commercial and residential cleaning service franchise with recurring revenue model.',
      benefits: ['Recurring revenue', 'Low startup costs', 'Flexible hours', 'Proven systems']
    },
    {
      id: 5,
      name: 'EduKids Learning Centers',
      category: 'Education',
      investment: { min: 300000, max: 600000 },
      roi: '30-48 months',
      rating: 4.9,
      reviews: 156,
      locations: 180,
      growth: '+40%',
      verified: true,
      image: 'https://images.pexels.com/photos/8364113/pexels-photo-8364113.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Premium early childhood education franchise with STEM-focused curriculum.',
      benefits: ['Premium positioning', 'Curriculum included', 'Teacher training', 'Parent engagement tools']
    },
    {
      id: 6,
      name: 'HomeStyle Furniture',
      category: 'Retail',
      investment: { min: 400000, max: 800000 },
      roi: '36-48 months',
      rating: 4.5,
      reviews: 203,
      locations: 120,
      growth: '+15%',
      verified: true,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      description: 'Contemporary furniture retail franchise with both physical and online presence.',
      benefits: ['Omnichannel approach', 'Inventory support', 'Design assistance', 'Volume discounts']
    }
  ];

  const categories = [
    'all',
    'Food & Beverage',
    'Health & Fitness', 
    'Technology',
    'Services',
    'Education',
    'Retail'
  ];

  const investmentRanges = [
    { value: 'all', label: 'All Investments' },
    { value: '0-100k', label: '$0 - $100K' },
    { value: '100k-300k', label: '$100K - $300K' },
    { value: '300k-500k', label: '$300K - $500K' },
    { value: '500k+', label: '$500K+' }
  ];

  const filteredFranchises = franchises.filter(franchise => {
    const matchesSearch = franchise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         franchise.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || franchise.category === selectedCategory;
    const matchesInvestment = investmentRange === 'all' || 
      (investmentRange === '0-100k' && franchise.investment.max <= 100000) ||
      (investmentRange === '100k-300k' && franchise.investment.min >= 100000 && franchise.investment.max <= 300000) ||
      (investmentRange === '300k-500k' && franchise.investment.min >= 300000 && franchise.investment.max <= 500000) ||
      (investmentRange === '500k+' && franchise.investment.min >= 500000);
    
    return matchesSearch && matchesCategory && matchesInvestment;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Franchise Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover verified franchise opportunities with detailed ROI analysis, 
            investment requirements, and direct franchisor connections.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-center">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Verified Franchises</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$50K</div>
              <div className="text-sm opacity-90">Minimum Investment</div>
            </div>
            <div>
              <div className="text-2xl font-bold">18 Months</div>
              <div className="text-sm opacity-90">Average ROI Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25%</div>
              <div className="text-sm opacity-90">Average Growth Rate</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search franchises..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select 
              value={investmentRange}
              onChange={(e) => setInvestmentRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              {investmentRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Franchise Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredFranchises.map((franchise) => (
            <div key={franchise.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="relative">
                <img
                  src={franchise.image}
                  alt={franchise.name}
                  className="w-full h-48 object-cover"
                />
                {franchise.verified && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    <Shield className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{franchise.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {franchise.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{franchise.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-gray-600">Investment</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(franchise.investment.min)} - {formatCurrency(franchise.investment.max)}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-600">ROI Timeline</span>
                    </div>
                    <p className="font-semibold text-gray-900">{franchise.roi}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{franchise.rating}</span>
                      <span className="text-sm text-gray-500">({franchise.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{franchise.locations} locations</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{franchise.growth}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Key Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {franchise.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                    {franchise.benefits.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        +{franchise.benefits.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200">
                    Get Info Package
                  </button>
                  <button className="flex items-center space-x-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find the Perfect Franchise?
          </h2>
          <p className="text-gray-600 mb-6">
            Let our franchise specialists help you discover opportunities that match your 
            investment goals and business interests.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Request Franchise Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Franchise;