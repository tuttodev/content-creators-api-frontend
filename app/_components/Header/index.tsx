import { FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          CreadoresApi
        </div>

        <div className={'flex space-x-4'}>
          <div className={'flex items-center space-x-2'}>
            <a
              href="https://github.com/tuttodev/content-creators-api-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={32}/>
            </a>
            <span>Frontend</span>
          </div>

          <div className={'flex items-center space-x-2'}>
            <a
              href="https://github.com/tuttodev/tech-content-creators-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={32}/>
            </a>
            <span>Backend</span>
          </div>
        </div>
      </div>
    </header>
  )
}