import React from 'react';
import PropTypes from 'prop-types';
// components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects.map(project => (
        <ProjectSummary key={project.id} project={project} />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectList;
