import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => (
        <Link to={`projects/${project.id}`} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectList;
