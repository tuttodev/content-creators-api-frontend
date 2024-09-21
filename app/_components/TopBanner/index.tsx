import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-2 relative">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <FaStar className="text-yellow-400" />

        <span>
          Parce, si te gustó CreadoresApi, regálanos una estrella en{' '}
          <a
            href="https://github.com/tuttodev/tech-content-creators-api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </span>

        <FaStar className="text-yellow-400" />
      </div>
    </div>
  );
};

export default TopBanner;
