import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { addProject } from '../../state/projects/actions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value
    });
  };

  handleSubmit = e => {
    const {addProject} = this.props;
    e.preventDefault();
    addProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addProject
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(CreateProject);
