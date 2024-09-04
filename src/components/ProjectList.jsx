// src/components/ProjectList.js
import React from 'react';
import ProjectCard from './ProjectCard'
import layoffsImage from '../assets/layoffs.png';
import videoGamesDashboard from '../assets/video-games-dashboard.png';
import performanceDashboard from '../assets/performance-dashboard.png';
import expensesAnalysis from '../assets/expenses-analysis.jpg';
import airwaysDashboard from '../assets/airways_dashbaord.png'
import powerBILogo from '../assets/Power-BI-Logo.png'
import tableauLogo from '../assets/Tableau-Logo.png'

const projects = [
  {
    title: 'Layoff Trends Analysis',
    description: 'Cleaned, analyzed, and extracted insights from a real-world layoffs dataset using SQL to uncover key trends and patterns',
    image:layoffsImage,
    icon:'devicon-mysql-plain-wordmark ',
    url:'https://github.com/SageeKr/Layoffs-Sql-Project/blob/main/Layoffs%20Exploratory%20Data%20Analysis%20and%20Cleaning%20with%20SQL.sql'
  },
  {
    title: 'Personal Expenses Analysis',
    description: 'Analyzed real-world bank spending data using Python libraries (pandas, matplotlib, seaborn) to deliver accurate financial insights from a clean and comprehensive dataset.',
    image: expensesAnalysis, 
    url:'https://github.com/SageeKr/personal-expense-jupiter',
    icon:'devicon-python-plain-wordmark ',
  },
  {
    title: 'British Airways Reviews Dashboard',
    description: 'Built a Tableau dashboard to analyze British Airways reviews, highlighting customer sentiment, key metrics, and feedback trends to guide strategic improvements.',
    image: airwaysDashboard, 
    url:'https://github.com/SageeKr/British-Airways-Reviews-Dashboard', 
    icon:tableauLogo
  },
  {
    title: 'Performance Report Dashboard',
    description: `Developed a Power BI dashboard to assess Plant Co.'s quantity performance using DAX measures, enabling data-driven decisions and identifying areas for improvement.`,
    image:performanceDashboard,
    url: 'https://github.com/SageeKr/Plant-Co-Performance', 
    icon:powerBILogo
  },
  {
    title: 'Video Game Sales Dashboard',
    description: `Created a Power BI dashboard to analyze Kaggle's video game sales data, providing valuable insights for people in the gaming industry through clear visualizations`,
    image:videoGamesDashboard,
    url: 'https://github.com/SageeKr/Video-Games-Sales-Dashboard', 
    icon:powerBILogo
  },
];
const ProjectList = () => {
  return (
    <div className="flex flex-wrap -m-4">
      {projects.map((project, index) => (
        <div key={index} className="w-full sm:w-1/2 p-4">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;


// {
//   title: 'Amazon: Web Scraper with Python',
//   description: 'In this project, I tracked Amazon product prices using Python and BeautifulSoup, stored data in a CSV file, and sent email alerts when prices dropped below a set threshold.',
//   icon:'devicon-python-plain-wordmark ',
//   image: Amazon,
// },
// import Amazon from '../assets/amazon.png';
