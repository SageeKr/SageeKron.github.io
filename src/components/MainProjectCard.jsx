import React from "react";

const MainProjectCard = ({ title, description, image }) => {
  return (
    <> <a
    href="https://github.com/SageeKr/JobTracker"
    className="block"
    target="_blank"
    rel="noopener noreferrer"
  >
           <h1 className="uppercase tracking-wide text-3xl mt-10  text-center  text-black font-semibold transition-colors duration-300 hover:text-blue-500 cursor-pointer font-montserrat">
      {title}
    </h1>
  </a>
    <div className="max-w-sm mx-auto bg-white shadow-md overflow-hidden md:max-w-7xl m-4 mt-10 h-full flex flex-col">
             
     <div className="relative">
        <a
          href="https://github.com/SageeKr/JobTracker"
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-92 w-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            src={image}
            alt="Project"
          />
        </a>
        <div className="absolute top-4 left-4">
            <i className="devicon-react-original-wordmark  text-3xl mr-1"></i>
            <i className="devicon-materialui-plain  text-3xl mr-1"></i>
            <i className="devicon-nodejs-plain-wordmark  text-3xl mr-1"></i>
            <i className="devicon-mongodb-plain-wordmark  text-3xl mr-1"></i>
            <i className="devicon-python-plain-wordmark  text-3xl mr-1"></i>            
        </div>
      </div>

      <div className="flex-grow p-8 flex flex-col">

        <p className="mt-1 text-gray-500 flex-grow text-lg">{description}</p>
        <div className="flex justify-center mt-4">
        <a
          href="https://github.com/SageeKr/JobTracker"
          className="inline-block sm:w-1/4 py-4 text-black border-2 text-center border-black text-lg font-semibold rounded-md hover:rounded-none hover:text-blue-500 hover:border-blue-500 focus:outline-none focus:shadow-outline cursor-pointer font-open-sans"
          target= "_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainProjectCard;
