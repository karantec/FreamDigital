import React, { useState } from 'react';
import { Paperclip, ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        agreeToPolicy: false
    });

    const [charCount, setCharCount] = useState(0);
    const maxChars = 1000;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (name === 'project') {
            setCharCount(value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (

        <section id="contactus">
        <div className="bg-gray-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                    <h2 className="text-2xl font-serif mb-6">Have An Idea?</h2>

                    <h1 className="text-6xl font-bold text-indigo-500 mb-12">
                        Drop us a<br />line
                    </h1>

                    {/* Email Section */}
                    <div className="flex items-center mb-8">
                        <p className="text-gray-300">Kumarmanas8084@Gmail.Com</p>
                        <button className="ml-2 text-white">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a 
                            href="https://wa.me/yourwhatsappnumber" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 border border-gray-700 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors"
                        >
                            <FaWhatsapp size={20} />
                            <span>WhatsApp</span>
                        </a>

                        <a 
                            href="https://linkedin.com/in/yourprofile" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 border border-gray-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-300 mb-1">
                                Your Name<span className="text-indigo-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="email" className="block text-gray-300 mb-1">
                                Your Email<span className="text-indigo-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="project" className="block text-gray-300 mb-1">
                                Tell Us About Your Project
                            </label>
                            <textarea
                                id="project"
                                name="project"
                                value={formData.project}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white resize-none"
                            ></textarea>
                            <div className="text-xs text-gray-500 text-right mt-1">
                                {charCount}/{maxChars}
                            </div>
                        </div>

                        <div className="mb-8">
                            <button type="button" className="flex items-center text-gray-300 hover:text-indigo-500 transition-colors">
                                <Paperclip size={18} className="mr-2" />
                                <span>Attach File</span>
                            </button>
                        </div>

                        <div className="flex items-start mb-8">
                            <input
                                type="checkbox"
                                id="agreeToPolicy"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleInputChange}
                                required
                                className="mt-1 mr-3"
                            />
                            <label htmlFor="agreeToPolicy" className="text-gray-300 text-sm">
                                I Agree With Your <a href="#" className="text-indigo-500">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-indigo-500/50"
                        >
                            <span className="mr-2">Submit</span>
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;
