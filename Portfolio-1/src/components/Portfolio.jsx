import React from 'react';
import Project from './Project';
import '../style/Portfolio.css';
import Weatherapp from '../assets/WeatherApp.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';

const projectData = [
    {
        title: '08-Vehicle Builder',
        image:VehiicleBuilder,
        githubLink: 'https://github.com/stephanyxpal/08-Vehicle-Builder',
    },
  {
    title: '09-Weather Dashboard',
    image:Weatherapp ,
    githubLink: 'https://github.com/stephanyxpal/09-Weather-Dasboard'
  },
  {
    title: '10_Employee Tracker',
    image: EmployeeTracker,
    githubLink: 'https://github.com/stephanyxpal/10_Employee_Tracker',
  },

];

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="flex-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;