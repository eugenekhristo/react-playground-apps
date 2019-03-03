import './edit-quote-page.scss';
import React, { Component } from 'react';
import EditForm from '../../../../shared/edit-form/edit-form';

class EditQuotePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Edit!</h1>
        <EditForm {...this.props} />
      </React.Fragment>
    );
  }
}

export default EditQuotePage;