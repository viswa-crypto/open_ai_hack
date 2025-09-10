import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Package, Truck, CreditCard, Shield } from 'lucide-react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('suppliers');
  const [searchTerm, setSearchTerm] = useState('');

  const suppliers = [
    {
      id: 1,
      name: 'TechComponents Pro',
      category: 'Electronics',
      location: 'Shenzhen, China',
      rating: 4.8,
      reviews: 245,
      verified: true,
      products: ['Microchips', 'Sensors', 'Circuit Boards'],
      minOrder: '$5,000',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Organic Materials Ltd',
      category: 'Raw Materials',
      location: 'Portland, USA',
      rating: 4.9,
      reviews: 189,
      verified: true,
      products: ['Organic Cotton', 'Bamboo Fiber', 'Natural Dyes'],
      minOrder: '$2,500',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'Global Steel Works',
      category: 'Manufacturing',
      location: 'Mumbai, India',
      rating: 4.7,
      reviews: 312,
      verified: true,
      products: ['Steel Sheets', 'Metal Components', 'Custom Fabrication'],
      minOrder: '$10,000',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
  ];

  const buyers = [
    {
      id: 1,
      name: 'EcoRetail Chain',
      category: 'Retail',
      location: 'California, USA',
      seeking: ['Sustainable Products', 'Eco-friendly Packaging'],
      budget: '$50K - $200K',
      verified: true,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Tech Innovations Inc',
      category: 'Technology',
      location: 'Austin, USA',
      seeking: ['IoT Devices', 'Smart Home Products'],
      budget: '$100K - $500K',
      verified: true,
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
  ];

  const categories = [
    'All Categories',
    'Electronics',
    'Raw Materials', 
    'Manufacturing',
    'Textiles',
    'Food & Beverage',
    'Automotive',
    'Healthcare'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified suppliers and buyers worldwide. Find the perfect 
            business partners for your venture.
          </p>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Verified Partners</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span className="text-sm">Integrated Logistics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span className="text-sm">Quality Assured</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('suppliers')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'suppliers'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Find Suppliers
          </button>
          <button
            onClick={() => setActiveTab('buyers')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'buyers'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Find Buyers
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${activeTab}...`}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {activeTab === 'suppliers' ? (
            suppliers.map((supplier) => (
              <div key={supplier.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={supplier.image}
                  alt={supplier.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{supplier.name}</h3>
                    {supplier.verified && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{supplier.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({supplier.reviews} reviews)</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Specializes in:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.products.slice(0, 2).map((product, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {product}
                        </span>
                      ))}
                      {supplier.products.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{supplier.products.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Min Order: {supplier.minOrder}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            buyers.map((buyer) => (
              <div key={buyer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={buyer.image}
                  alt={buyer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{buyer.name}</h3>
                    {buyer.verified && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{buyer.location}</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Looking for:</p>
                    <div className="flex flex-wrap gap-1">
                      {buyer.seeking.map((item, index) => (
                        <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Budget: {buyer.budget}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Load More Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;