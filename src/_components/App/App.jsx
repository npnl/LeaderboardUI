import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../../_helpers';
import {flashMessagesActions} from '../../_actions';
import {PrivateRoute} from '../privateRoute';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {RegisterPage} from '../RegisterPage';
import {ResetPasswordPage} from '../ResetPasswordPage';
import {NewSubmissionForm} from '../NewSubmission';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import {Header} from '../common/Header'

class App extends React.Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(flashMessagesActions.clear());
    });
  }

  render() {
    const {flashMessages} = this.props;
    return (

      <div className="App">
        <Router history={history}>
          <div>
          <Header/>
          <div className="main-container">
            <Route exact path="/" component={HomePage}/>
            <Route path="/Home" component={HomePage}/>
            <PrivateRoute path="/NewSubmission" component={NewSubmissionForm}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/reset_password/update_password/:reset_token"
                   component={(props) => <ResetPasswordPage {...props} step="update_password"/>}/>
            <Route path="/reset_password/request/"
                   component={(props) => <ResetPasswordPage {...props} step="request_password_link"/>}/>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {flashMessages} = state;
  return {
    flashMessages
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};