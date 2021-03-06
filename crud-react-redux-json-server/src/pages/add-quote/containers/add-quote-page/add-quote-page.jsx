import './add-quote-page.scss';
import React, { Component } from 'react';
import EditForm from '../../../../shared/edit-form/edit-form';

class AddQuotePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Add</h1>
        <EditForm {...this.props} />
      </React.Fragment>
    );
  }
}

export default AddQuotePage;
