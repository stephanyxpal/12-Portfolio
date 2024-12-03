import React from 'react';
import '../style/Portfolio.css';

function Project({ title, deployedLink, githubLink }) {
  return (
    <div className="flex-item">
    <div className="overlay">
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed Site
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>
        GitHub Repo
      </a>
    </div>
  </div>
);
}

export default Project;