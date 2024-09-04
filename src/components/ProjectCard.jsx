import React from "react";

const ProjectCard = ({ title, description, image, url, icon }) => {
  const isDevIcon = typeof icon === 'string' && icon.startsWith('devicon-');
  return (
    <div className="max-w-sm mx-auto bg-white  shadow-md overflow-hidden md:max-w-7xl m-4 h-full flex flex-col">
     <div className="relative">
        <a
          href={url}
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-72 w-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            src={image}
            alt="Project"
          />
        </a>
        <div className="absolute top-4 left-4">
          {isDevIcon ? (
            <i className={`${icon} text-5xl`}></i>
          ) : (
            <img src={icon} className="w-16" alt="icon" />
          )}
        </div>
      </div>

      <div className="flex-grow p-8 flex flex-col">
        <a
          href={url}
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="uppercase text-xl text-center tracking-wide text-black font-semibold transition-colors duration-300 hover:text-blue-500 cursor-pointer font-montserrat">
            {title}
          </h1>
        </a>
        <p className="mt-1 text-gray-500 flex-grow text-lg font-open-sans">{description}</p>
        <div className="flex justify-center mt-4">
        <a
          href={url}
          className="inline-block sm:w-1/4 py-4 text-black border-2 text-center border-black text-lg font-semibold rounded-md hover:rounded-none hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:shadow-outline cursor-pointer font-open-sans"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
