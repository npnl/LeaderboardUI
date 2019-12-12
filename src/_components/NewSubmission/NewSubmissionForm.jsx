import React from 'react';
import {connect} from 'react-redux';
import { userActions } from '../../_actions';

class NewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { score } = this.state;
    const { dispatch } = this.props;
    if (score) {
      dispatch(userActions.makeSubmission({submission: {score}}));
    }
  }

  render() {

    const { users, flashMessages } = this.props;
    const { score } = this.state;

    return (
      <div className="center-form">
        <h2>Make a new Submission</h2>
        {/*{flashMessages.message && <span className={""+flashMessages.type}>{flashMessages.message !== undefined ? (flashMessages.type === 'alert-success' ? 'Success : ' + flashMessages.message : 'Failure : ' + flashMessages.message) : ''}</span>}*/}
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group'}>
            <label htmlFor="score">Score</label>
            <input type="number" className="form-control" name="score" value={score} min="0" max="100" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { users } = state.users;
  const { flashMessages } = state;
  return {
    users,
    flashMessages
  };
}

const connectedNewSubmissionForm = connect(mapStateToProps)(NewSubmissionForm);
export {connectedNewSubmissionForm as NewSubmissionForm};