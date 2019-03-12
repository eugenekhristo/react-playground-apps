import React from 'react';
// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
// firebase
import { firestoreConnect } from 'react-redux-firebase';
// components
import Spinner from '../shared/Spinner';

const ProjectDetails = ({ match, project }) => {
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {`${project.authorFirstName} ${project.authorLastName}`}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Spinner />
      </div>
    );
  }
};

// ownprops - props of component that we are engincing with HOC
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const projects = state.firestore.data.projects;
  return projects ? {project: projects[id]} : null;
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
