import React from 'react';

const OurTeam = () => {
    const executiveTeam = [
        {
            id: 1,
            name: "Manas Mahendra",
            position: "Founder & Ceo",
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            id: 2,
            name: "Suraj Kumar",
            position: "Chief UI/UX Designer",
            imageSrc: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            id: 3,
            name: "Swami Kumar",
            position: "Senior Designer",
            imageSrc: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
        },
        {
            id: 4,
            name: "Vishal Singh",
            position: "CO - Founder & CTO",
            imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            id: 5,
            name: "Nikita Bansal",
            position: "Manager",
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
            id: 6,
            name: "Priya",
            position: "COO Manager",
            imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        }
    ];

    const salesTeam = [
        {
            id: 1,
            name: "Nausheen",
            position: "Senior Manager",
            imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
        },
        {
            id: 2,
            name: "Rohit Sharma",
            position: "Manager",
            imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
    ];

    return (
        <div className="bg-black text-white p-6 min-h-screen">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-3xl font-serif mb-4">Our Team</h1>
                <p className="text-sm mb-8 max-w-xs">
                    Our Dedicated Team Strives To Deliver Excellence In Every Service We Provide.
                </p>

                {/* Executive Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Large card for the first item */}
                    <div className="relative col-span-1 md:row-span-2">
                        <img
                            src={executiveTeam[0].imageSrc}
                            alt={executiveTeam[0].name}
                            className="w-full h-96 object-cover"
                        />
                        <div className="mt-4 flex items-center">
                            <span className="text-gray-400 mr-2">01</span>
                            <div className="h-px bg-gray-400 w-12 mr-2"></div>
                            <div>
                                <h3 className="font-medium">{executiveTeam[0].name}</h3>
                                <p className="text-xs text-gray-400">{executiveTeam[0].position}</p>
                            </div>
                        </div>
                    </div>

                    {/* Middle column */}
                    <div className="col-span-1 space-y-8">
                        <div className="relative">
                            <img
                                src={executiveTeam[1].imageSrc}
                                alt={executiveTeam[1].name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">02</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{executiveTeam[1].name}</h3>
                                    <p className="text-xs text-gray-400">{executiveTeam[1].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={executiveTeam[2].imageSrc}
                                alt={executiveTeam[2].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">03</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{executiveTeam[2].name}</h3>
                                    <p className="text-xs text-gray-400">{executiveTeam[2].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="col-span-1 space-y-8">
                        <div className="relative">
                            <img
                                src={executiveTeam[3].imageSrc}
                                alt={executiveTeam[3].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">04</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{executiveTeam[3].name}</h3>
                                    <p className="text-xs text-gray-400">{executiveTeam[3].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={executiveTeam[4].imageSrc}
                                alt={executiveTeam[4].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">05</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{executiveTeam[4].name}</h3>
                                    <p className="text-xs text-gray-400">{executiveTeam[4].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={executiveTeam[5].imageSrc}
                                alt={executiveTeam[5].name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">06</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{executiveTeam[5].name}</h3>
                                    <p className="text-xs text-gray-400">{executiveTeam[5].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Executive Team Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-serif mb-8 text-center">Sales Executive Team</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {salesTeam.map((member, index) => (
                        <div key={member.id} className="relative">
                            <img
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">{String(index + 1).padStart(2, '0')}</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{member.name}</h3>
                                    <p className="text-xs text-gray-400">{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;