import React from 'react';
import { Map, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Map className="h-6 w-6 mr-2 text-blue-400" />
            <span className="text-lg font-semibold">ProfileMap</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProfileMap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;