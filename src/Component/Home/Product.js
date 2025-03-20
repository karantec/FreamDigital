import React, { useState, useEffect } from 'react';

const ProductCard = ({ title, imageSrc, isActive }) => {
    return (
        <div className={`flex flex-col transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
            <div className="rounded-lg overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
            </div>
            <h3 className="text-white text-xl mt-4">{title}</h3>
        </div>
    );
};

const ProductNavItem = ({ title, isActive, onClick }) => {
    return (
        <div
            className={`cursor-pointer py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`}
            onClick={onClick}
        >
            <h4 className="text-lg">{title}</h4>
            {isActive && <div className="w-24 h-0.5 bg-blue-400 mt-1"></div>}
        </div>
    );
};

const OurProducts = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(33.33); // Default width percentage for desktop (3 items)

    const categories = [
        { id: 'all', title: 'Our Software' },
        { id: 'security', title: 'Security And Computing Solutions' },
        { id: 'atl', title: 'ATL' },
        { id: 'business', title: 'Business' },
    ];

    const products = [
        {
            id: 1,
            title: 'Restaurant Management System',
            imageSrc: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop',
            category: 'business'
        },
        {
            id: 2,
            title: 'School Management System',
            imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop',
            category: 'business'
        },
        {
            id: 3,
            title: 'Billing And POS Management',
            imageSrc: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&auto=format&fit=crop',
            category: 'business'
        },
        {
            id: 4,
            title: 'Cybersecurity Suite',
            imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
            category: 'security'
        },
        {
            id: 5,
            title: 'Cloud Computing Solution',
            imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
            category: 'security'
        }
    ];

    // Filter products based on active category
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category.toLowerCase() === activeCategory.toLowerCase());

    // Create a duplicated array for infinite scroll effect
    // We duplicate items to ensure we always have enough items to display
    const duplicatedProducts = [...filteredProducts, ...filteredProducts, ...filteredProducts];

    // Update slide width based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlideWidth(100); // One item at a time on mobile
            } else {
                setSlideWidth(33.33); // Three items at a time on desktop
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Reset position when filtered products change
    useEffect(() => {
        setCurrentSlide(0);
    }, [activeCategory]);

    // True infinite scroll functions
    const nextSlide = () => {
        const totalItems = filteredProducts.length;
        if (totalItems === 0) return;

        const newSlide = (currentSlide + 1) % totalItems;
        setCurrentSlide(newSlide);
    };

    const prevSlide = () => {
        const totalItems = filteredProducts.length;
        if (totalItems === 0) return;

        const newSlide = (currentSlide - 1 + totalItems) % totalItems;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-white text-4xl font-light">Our Products</h2>

                    {/* Navigation Arrows */}
                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="text-white hover:text-gray-300 transition"
                            aria-label="Previous slide"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="text-white hover:text-gray-300 transition"
                            aria-label="Next slide"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Product Categories */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        {categories.map((category) => (
                            <ProductNavItem
                                key={category.id}
                                title={category.title}
                                isActive={activeCategory === category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                }}
                            />
                        ))}
                    </div>

                    {/* Product Slider - Always shows items in an infinite loop */}
                    <div className="md:w-3/4 overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * slideWidth}%)`,
                            }}
                        >
                            {/* We use the duplicated array to ensure we always have items */}
                            {duplicatedProducts.map((product, index) => (
                                <div
                                    key={`${product.id}-${index}`}
                                    className="px-2"
                                    style={{ minWidth: `${slideWidth}%` }}
                                >
                                    <ProductCard
                                        title={product.title}
                                        imageSrc={product.imageSrc}
                                        isActive={index % filteredProducts.length === currentSlide}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;