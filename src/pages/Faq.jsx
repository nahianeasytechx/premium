import React, { useState } from 'react';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    { id: 'General', name: 'General' },
    { id: 'BookingPayment', name: 'Booking & Payment' },
    { id: 'LegalDocumentation', name: 'Legal & Documentation' }
  ];

  const faqs = {
    General: [
      {
        question: 'What kind of properties does Premium Homes Ltd. develop?',
        answer: 'We develop residential apartments and land-based projects.'
      },
      {
        question: 'Where are your current projects located?',
        answer: 'Our current projects are located in prime areas across major cities.'
      },
      {
        question: 'How can I schedule a site visit?',
        answer: 'You can schedule a site visit by calling our helpline or filling out the contact form on our website.'
      }
    ],
    BookingPayment: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, credit cards, and installment plans for our properties.'
      },
      {
        question: 'Is there a booking fee?',
        answer: 'Yes, we require a booking fee to reserve your selected property. The amount varies by project.'
      }
    ],
    LegalDocumentation: [
      {
        question: 'What legal documents are provided with property purchase?',
        answer: 'We provide all necessary legal documents including sale deed, title clearance, and building approval certificates.'
      },
      {
        question: 'Do you assist with home loan processing?',
        answer: 'Yes, we have partnerships with major banks and can assist you with home loan processing.'
      }
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className=" min-h-screen mt-20 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
        
        {/* Categories */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`text-left py-2 px-4 rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-[#06573c] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <hr className="my-6 border-gray-300" />
          
          {/* FAQ Items */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{activeCategory}</h2>
            {faqs[activeCategory].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                <button
                  className="w-full text-left p-4 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Help Section */}
        <div className="bg-[#06573c] text-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Need help? Talk to our expert.</h2>
          <p className="mb-4">Talk to our experts or Browse through more FAQs.</p>
          <button className="bg-white text-[#06573c] font-medium py-2 px-4 rounded-md hover:bg-blue-50 transition-colors">
            Contact an Expert
          </button>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg">+8801958253300</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;