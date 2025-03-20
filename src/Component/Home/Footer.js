import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#464BF9] text-white p-8">
      <div className="container mx-auto">
        {/* Top section with logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and tagline */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="text-4xl font-bold mb-4">
                <img src="logo.png" alt="logo" className="h-16 w-16" />
            </div>
            <p className="text-sm md:text-base">
              With Our Collective Expertise, We Turn Ideas Into Reality. 
              Whether You're A Startup Or An Established Brand, 
              We're Here To Elevate Your Online Presence And Help 
              You Achieve Your Goals.
            </p>
          </div>

          {/* Links sections */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">How We Can Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Returns Policy</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Who We Are</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Social media section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Follow us on socials</h3>
              <div className="flex space-x-2">
                <a href="#" className="p-2 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors">
                  <span className="font-bold">G</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-6 border-t border-blue-500 flex flex-col md:flex-row justify-between text-sm">
          <div>Copyright 2024 © Frame Digital</div>
          <div><a href="#" className="hover:underline">Privacy & Policy</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;