import React, { useState } from 'react';

const PortfolioItem = ({ title, category, image, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
                <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}></div>
                <div className="h-full w-full flex items-center justify-center">
                    {image ? (
                        <img src={image} alt={title} className="object-cover w-full h-full" />
                    ) : (
                        <div className="flex items-center justify-center h-full w-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transform rotate-12"></div>
                        </div>
                    )}
                </div>
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-blue-300 text-sm uppercase tracking-wider mb-2">{category}</p>
                    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

const PortfolioFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-6 py-2 rounded-full text-sm transition ${activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'UI/UX Design', 'Web Development', 'Branding', 'Marketing'];

    const portfolioItems = [
        {
            id: 1,
            title: 'Modern E-commerce Platform',
            category: 'Web Development',
            description: 'Complete e-commerce solution with cutting-edge UI and seamless payment integration.',
            image: null
        },
        {
            id: 2,
            title: 'Financial App Redesign',
            category: 'UI/UX Design',
            description: 'Comprehensive redesign of a financial management application focusing on user experience.',
            image: null
        },
        {
            id: 3,
            title: 'Tech Startup Brand Identity',
            category: 'Branding',
            description: 'Complete brand identity package for an emerging tech startup in the AI space.',
            image: null
        },
        {
            id: 4,
            title: 'Digital Marketing Campaign',
            category: 'Marketing',
            description: 'Integrated digital campaign that increased client conversion rates by 43%.',
            image: null
        },
        {
            id: 5,
            title: 'Healthcare Provider Platform',
            category: 'Web Development',
            description: 'Secure and accessible platform connecting patients with healthcare providers.',
            image: null
        },
        {
            id: 6,
            title: 'Luxury Brand Experience',
            category: 'UI/UX Design',
            description: 'Immersive digital experience for a high-end luxury goods manufacturer.',
            image: null
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <div className="bg-black min-h-screen text-white py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
                        <p className="text-gray-400 max-w-xl">
                            Explore our latest projects where we've transformed ideas into impactful digital solutions.
                            Each project represents our commitment to quality, innovation, and client satisfaction.
                        </p>
                    </div>

                    {/* 3D element for visual interest */}
                    <div className="hidden md:block">
                        <div className="w-20 h-20 relative">
                            <img src='/cube.svg' alt='3D Cube' className='absolute top-0 left-0 w-full h-full' />
                            {/* <img src='/cube1.svg' alt='3D Cube' className='absolute top-0 left-0 w-full h-full' /> */}
                        </div>
                    </div>
                </div>

                {/* Filter Controls */}
                <PortfolioFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>

                {/* CTA Section */}
                
            </div>

            {/* Background effects */}
            <div className="fixed -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 z-0"></div>
            <div className="fixed top-1/4 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-5 z-0"></div>
        </div>
    );
};

export default Portfolio;