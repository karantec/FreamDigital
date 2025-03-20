import React, { useState } from 'react';

// Modal component for the application form
const ApplicationModal = ({ isOpen, onClose, jobTitle, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: jobTitle,
        resumeLink: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-md w-full">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium text-white">Apply for {jobTitle}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Position you're applying for"
                                    readOnly
                                />
                            </div>

                            <div>
                                <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-300 mb-1">Resume Link</label>
                                <input
                                    type="url"
                                    id="resumeLink"
                                    name="resumeLink"
                                    value={formData.resumeLink}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter link to your resume (Google Drive, Dropbox, etc.)"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const CareerOpening = ({ title, subtitle, imageSrc, details }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApply = () => {
        setIsModalOpen(true);
    };

    const handleSubmitApplication = (formData) => {
        // Handle form submission (e.g., send data to backend)
        console.log('Application submitted:', formData);
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="overflow-hidden">
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-900 transition-all duration-300">
                    <img
                        src={imageSrc}
                        alt={title}
                        className={`w-full h-full object-cover opacity-90 transition-all duration-300 ${isHovering ? 'scale-105 opacity-30' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

                    {/* Job Title and Subtitle */}
                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-xl font-medium text-white">{title}</h3>
                        <p className="text-sm text-gray-300">{subtitle}</p>
                    </div>

                    {/* Job Details on Hover */}
                    <div
                        className={`absolute inset-0 p-6 bg-blue-900/90 transition-all duration-300 flex flex-col justify-center ${isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
                        <p className="text-sm text-gray-200 mb-4">{subtitle}</p>

                        <div className="text-gray-200 text-sm space-y-2 mb-4">
                            {details.responsibilities && (
                                <div>
                                    <h4 className="font-medium text-white">Responsibilities:</h4>
                                    <ul className="list-disc pl-4 mt-1">
                                        {details.responsibilities.slice(0, 3).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {details.requirements && (
                                <div>
                                    <h4 className="font-medium text-white">Requirements:</h4>
                                    <ul className="list-disc pl-4 mt-1">
                                        {details.requirements.slice(0, 2).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
                <button
                    onClick={handleApply}
                    className="bg-transparent hover:bg-blue-900 text-white border border-gray-500 rounded-full px-4 py-2 text-sm flex items-center gap-2 transition group-hover:border-blue-400"
                >
                    Apply
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={title}
                onSubmit={handleSubmitApplication}
            />
        </div>
    );
};

const Career = () => {
    const openings = [
        {
            id: 1,
            title: 'Software Developer',
            subtitle: '(SaaS & Web Applications)',
            imageSrc: '/dummy.svg',
            details: {
                responsibilities: [
                    'Develop and maintain web applications using React, Node.js',
                    'Collaborate with UI/UX designers to implement responsive designs',
                    'Optimize applications for maximum speed and scalability',
                    'Write clean, maintainable code with proper documentation'
                ],
                requirements: [
                    'Proficiency in JavaScript and modern frameworks',
                    'Experience with RESTful APIs and database integration',
                    'Strong problem-solving skills and attention to detail'
                ]
            }
        },
        {
            id: 2,
            title: 'UI/UX',
            subtitle: 'Designer',
            imageSrc: '/dummy.svg',
            details: {
                responsibilities: [
                    'Create user-centered designs by understanding business requirements',
                    'Design UI elements and build prototypes',
                    'Collaborate with developers to implement designs',
                    'Conduct user research and testing'
                ],
                requirements: [
                    'Proficiency in design tools like Figma or Adobe XD',
                    'Portfolio demonstrating UI/UX projects',
                    'Understanding of user-centered design principles'
                ]
            }
        },
        {
            id: 3,
            title: 'Digital Marketing',
            subtitle: 'Specialist',
            imageSrc: '/dummy.svg',
            details: {
                responsibilities: [
                    'Develop and execute digital marketing strategies',
                    'Manage social media campaigns and content',
                    'Analyze performance metrics and optimize campaigns',
                    'Stay updated with latest digital marketing trends'
                ],
                requirements: [
                    'Experience with SEO, SEM, and analytics tools',
                    'Strong content creation and copywriting skills',
                    'Understanding of various digital marketing channels'
                ]
            }
        },
        {
            id: 4,
            title: 'DevOps',
            subtitle: 'Engineer',
            imageSrc: '/dummy.svg',
            details: {
                responsibilities: [
                    'Build and maintain CI/CD pipelines',
                    'Manage cloud infrastructure and containerization',
                    'Implement security best practices',
                    'Automate deployment processes'
                ],
                requirements: [
                    'Experience with cloud platforms (AWS, Azure, GCP)',
                    'Knowledge of containerization and orchestration tools',
                    'Scripting and automation skills'
                ]
            }
        }
    ];

    return (
        <div className="bg-black min-h-screen py-20 px-4 sm:px-8 relative">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black opacity-80"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Career Header */}
                <div className="mb-12">
                    <h4 className="text-white text-3xl mb-2">Career</h4>
                    <h2 className="text-white text-4xl font-light mb-8">Join Our Team. Innovate. Inspire. Grow.</h2>
                    <p className="text-gray-300 max-w-4xl">
                        At Frame Digital Solution Pvt. Ltd., we don't just build software— we build futures. If you're passionate about technology, innovation, and problem-solving, then this is the place for you. We are a team of forward-thinkers, developers, designers, and strategists dedicated to creating cutting-edge IT solutions that shape the future of businesses worldwide.
                    </p>
                </div>

                {/* Current Openings Section */}
                <div className="mb-8">
                    <h3 className="text-white text-xl mb-8">Current Openings</h3>
                </div>

                {/* Job Openings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {openings.map((job) => (
                        <CareerOpening
                            key={job.id}
                            title={job.title}
                            subtitle={job.subtitle}
                            imageSrc={job.imageSrc}
                            details={job.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Career;
