import React from 'react';
import {connect} from 'react-redux';
import {Header} from '../common/Header'

class NewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Header/>
        <div className="center">
          <h1>TODO: Add a new form here for making a new submission.</h1>

        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {};
}

const connectedNewSubmissionForm = connect(mapStateToProps)(NewSubmissionForm);
export {connectedNewSubmissionForm as NewSubmissionForm};