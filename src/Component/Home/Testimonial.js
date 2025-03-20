import React, { useState } from 'react';

const TestimonialSection = () => {
  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Awesome! Focuses On The End-User And Helps Improve Retention. They Excel In User Experience And Big-Picture Thinking.",
      name: "Sanjana Singh",
      title: "Founder & CEO, Mountrabu School",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      quote: "Their network solutions transformed our business operations. The speed and reliability have been outstanding, helping us serve clients more efficiently.",
      name: "Michael Chen",
      title: "CTO, Global Ventures Inc.",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      quote: "We've been working with them for over 3 years now. The customer service is exceptional, and they always go above and beyond to ensure our satisfaction.",
      name: "Sarah Johnson",
      title: "Operations Manager, Tech Solutions",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      quote: "The implementation was seamless and the ongoing support has been fantastic. Our network performance has improved by 200% since switching.",
      name: "David Rodriguez",
      title: "IT Director, Innovate Systems",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      quote: "Their global reach and technical expertise have been invaluable as we expanded into new markets. A trusted partner for any growing business.",
      name: "Emma Williams",
      title: "VP of International Relations, NextGen Corp",
      avatar: "/api/placeholder/60/60"
    }
  ];

  // State to track current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Testimonial Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-4">What Our Clients Say</h3>
            <p className="text-sm text-gray-400 mb-6">
              We Supply Clients Across The Entire Globe With Improved Network Connections.
            </p>
            
            {/* Logo */}
            <div className="mt-8">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center p-3">
                <img 
                  src="imag.png" 
                  alt="Company logo" 
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Testimonial */}
          <div className="w-full md:w-2/3 relative">
            <div className="relative">
              {/* Quote mark */}
              <span className="text-5xl text-gray-700 absolute -left-2 top-0">"</span>
              
              {/* Testimonial content */}
              <div className="pl-8 pt-4">
                <p className="text-xl font-medium mb-6">
                  {currentTestimonial.quote}
                </p>
                
                <div className="border-t border-gray-700 pt-6 mt-8">
                  <div className="flex items-center">
                    {/* Avatar */}
                    <div className="mr-4">
                      <img 
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="rounded-full w-12 h-12"
                      />
                    </div>
                    
                    {/* Name and title */}
                    <div>
                      <p className="font-medium">{currentTestimonial.name}</p>
                      <p className="text-xs text-gray-400">{currentTestimonial.title}</p>
                    </div>
                    
                    {/* Navigation arrows */}
                    <div className="ml-auto flex space-x-2">
                      <button 
                        onClick={goToPrevious}
                        className="bg-transparent border border-gray-700 rounded-full p-1 hover:bg-gray-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={goToNext}
                        className="bg-transparent border border-gray-700 rounded-full p-1 hover:bg-gray-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;