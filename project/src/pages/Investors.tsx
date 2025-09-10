import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Shield, Clock, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const Investors = () => {
  const [activeTab, setActiveTab] = useState('funding');
  const [selectedFunding, setSelectedFunding] = useState('seed');

  const fundingOptions = [
    {
      id: 'seed',
      name: 'Seed Funding',
      amount: '$10K - $2M',
      stage: 'Early Stage',
      description: 'Perfect for validating your MVP and initial market traction',
      requirements: ['Working prototype', 'Initial user base', 'Market validation'],
      timeline: '2-4 months',
      successRate: '15%'
    },
    {
      id: 'series-a',
      name: 'Series A',
      amount: '$2M - $15M',
      stage: 'Growth Stage',
      description: 'Scale your proven business model and expand market reach',
      requirements: ['Product-market fit', 'Recurring revenue', 'Strong team'],
      timeline: '4-8 months',
      successRate: '8%'
    },
    {
      id: 'venture-debt',
      name: 'Venture Debt',
      amount: '$1M - $10M',
      stage: 'All Stages',
      description: 'Non-dilutive financing to extend runway and accelerate growth',
      requirements: ['Existing revenue', 'VC backing preferred', 'Strong financials'],
      timeline: '1-3 months',
      successRate: '25%'
    }
  ];

  const investors = [
    {
      id: 1,
      name: 'Sequoia Capital',
      type: 'Venture Capital',
      stage: ['Seed', 'Series A', 'Series B+'],
      sectors: ['Tech', 'Healthcare', 'Fintech'],
      portfolio: 'Apple, Google, WhatsApp',
      checkSize: '$100K - $25M',
      location: 'Menlo Park, CA',
      verified: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      name: 'Andreessen Horowitz',
      type: 'Venture Capital',
      stage: ['Seed', 'Series A', 'Growth'],
      sectors: ['Software', 'Crypto', 'Bio'],
      portfolio: 'Coinbase, Airbnb, Facebook',
      checkSize: '$50K - $50M',
      location: 'Menlo Park, CA',
      verified: true,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 3,
      name: 'Y Combinator',
      type: 'Accelerator',
      stage: ['Pre-Seed', 'Seed'],
      sectors: ['All Sectors'],
      portfolio: 'Stripe, Dropbox, Reddit',
      checkSize: '$500K',
      location: 'Mountain View, CA',
      verified: true,
      image: 'https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const loanOptions = [
    {
      id: 1,
      name: 'SBA Loans',
      amount: '$30K - $5M',
      rate: '6.5% - 9.5%',
      term: '10-25 years',
      description: 'Government-backed loans with favorable terms for small businesses',
      requirements: ['Personal guarantee', 'Good credit score', 'Business plan']
    },
    {
      id: 2,
      name: 'Business Lines of Credit',
      amount: '$10K - $500K',
      rate: '8% - 25%',
      term: 'Revolving',
      description: 'Flexible credit line for working capital and short-term needs',
      requirements: ['6 months in business', 'Minimum revenue', 'Personal guarantee']
    },
    {
      id: 3,
      name: 'Equipment Financing',
      amount: '$5K - $5M',
      rate: '6% - 20%',
      term: '2-10 years',
      description: 'Financing specifically for business equipment and machinery',
      requirements: ['Equipment as collateral', 'Down payment', 'Business financials']
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Prepare Your Materials',
      description: 'Gather business plan, financial statements, and pitch deck',
      completed: true
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Complete our streamlined application process',
      completed: false
    },
    {
      step: 3,
      title: 'Initial Review',
      description: 'Our team reviews your application within 48 hours',
      completed: false
    },
    {
      step: 4,
      title: 'Investor Matching',
      description: 'We connect you with relevant investors or lenders',
      completed: false
    },
    {
      step: 5,
      title: 'Pitch & Negotiate',
      description: 'Present to investors and negotiate terms',
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funding & Investment Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access venture capital, angel investors, loans, and alternative funding 
            options. Get matched with the right investors for your business stage.
          </p>
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-center">
            <div>
              <div className="text-2xl font-bold">$2.4B</div>
              <div className="text-sm opacity-90">Total Funded</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-sm opacity-90">Startups Funded</div>
            </div>
            <div>
              <div className="text-2xl font-bold">350+</div>
              <div className="text-sm opacity-90">Active Investors</div>
            </div>
            <div>
              <div className="text-2xl font-bold">68%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md mx-auto">
          {['funding', 'investors', 'loans'].map((tab) => (
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

        {/* Funding Options Tab */}
        {activeTab === 'funding' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {fundingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedFunding(option.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedFunding === option.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{option.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{option.amount}</p>
                    <p className="text-xs text-blue-600">{option.stage}</p>
                  </button>
                ))}
              </div>

              {/* Selected Funding Details */}
              {fundingOptions.map((option) => 
                selectedFunding === option.id && (
                  <div key={option.id} className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.name}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">Funding Range</h4>
                        <p className="text-gray-600">{option.amount}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">Timeline</h4>
                        <p className="text-gray-600">{option.timeline}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-teal-500 mb-2" />
                        <h4 className="font-semibold text-gray-900">Success Rate</h4>
                        <p className="text-gray-600">{option.successRate}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {option.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                      Apply for {option.name}
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Application Process Sidebar */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Process</h3>
              <div className="space-y-4">
                {applicationSteps.map((step) => (
                  <div key={step.step} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.completed ? '✓' : step.step}
                    </div>
                    <div>
                      <h4 className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-900'}`}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Investors Tab */}
        {activeTab === 'investors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor) => (
              <div key={investor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{investor.name}</h3>
                    {investor.verified && (
                      <Shield className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{investor.type}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Investment Stages:</p>
                    <div className="flex flex-wrap gap-1">
                      {investor.stage.map((stage, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {stage}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Sectors:</p>
                    <div className="flex flex-wrap gap-1">
                      {investor.sectors.map((sector, index) => (
                        <span key={index} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Check Size: <span className="font-medium">{investor.checkSize}</span></p>
                    <p className="text-sm text-gray-600">Location: <span className="font-medium">{investor.location}</span></p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Notable Portfolio:</p>
                    <p className="text-sm text-gray-900 font-medium">{investor.portfolio}</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Request Introduction
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Loans Tab */}
        {activeTab === 'loans' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {loanOptions.map((loan) => (
              <div key={loan.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{loan.name}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Amount</p>
                    <p className="font-semibold text-gray-900">{loan.amount}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Interest Rate</p>
                    <p className="font-semibold text-gray-900">{loan.rate}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Term</p>
                    <p className="font-semibold text-gray-900">{loan.term}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Approval</p>
                    <p className="font-semibold text-gray-900">2-7 days</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {loan.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Apply Now
                  </button>
                  <button className="flex items-center space-x-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Personalized Funding Advice?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule a free consultation with our funding experts to discuss 
            your specific needs and get matched with the best funding options.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investors;