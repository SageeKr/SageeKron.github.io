import './App.css';
import HeroSection from './components/HeroSection';
import MainProjectCard from './components/MainProjectCard';
import ProjectList from './components/ProjectList'
import JobTracker from './assets/‏‏JobTracker.png'
import ContactForm from './components/ContactForm';
import { useState } from 'react';
          
function App() {
  const[page,setPage] = useState('Projects');
  return (
    <div className=" bg-[url('./assets/Untitled-2.png')] ">
        <HeroSection/>
        <div className="text-left text-2xl bg-customGray  mx-auto xl:mx-56 lg:mx-24 flex items-center justify-between mt-52">
          <div>
                  <span className={`bg-white px-5 py-4 ${page==='Projects' ? 'text-black font-bold' : 'text-gray-500'}  font-open-sans hover:text-blue-500 cursor-pointer border-r-2 border-b-2 box-border`} onClick={()=>{setPage('Projects')}}>Projects</span>
                  <span className={`bg-white px-5 py-4 ${page!=='Projects' ? 'text-black font-bold' : 'text-gray-500'}  font-open-sans hover:text-blue-500 cursor-pointer border-r-2 border-b-2 box-border`} onClick={()=>{setPage('')}}>Contact</span>
      </div>

      <div className="flex items-center space-x-4 p-4">
          <a href="https://www.linkedin.com/in/sagee-kron-634198200/" className="icon-link" target= "_blank" rel="noopener noreferrer" >
          <i className="devicon-linkedin-plain text-white text-3xl hover:text-blue-500"></i>
        </a>
        <a href="https://github.com/SageeKr" className="icon-link" target= "_blank" rel="noopener noreferrer">
          <i className="devicon-github-original text-white text-3xl hover:text-blue-500"></i>
        </a>
      </div>
    </div>
      <main className="p-4 xl:mx-56 lg:mx-24 bg-white px-10">
      {page === 'Projects' ? (
        <>
          <MainProjectCard
            title="JOB TRACKER WEB APPLICATION"
            description="Developed Job Tracker using a variety of programming languages. Job Tracker is an all-in-one tool for job seekers to efficiently manage applications, track statuses, and match resumes to job descriptions, simplifying the job search process."
            image={JobTracker}
          />
          <ProjectList />
        </>
      ) : (
        <ContactForm />
      )}
      </main>
      <footer className="bg-blue-800 text-white p-4 mt-5 text-center">
        &copy; Sagee Kron Protfolio
      </footer>
    </div>
  );
}

export default App;
