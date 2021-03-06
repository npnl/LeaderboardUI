import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../../_actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        group: '',
        authentication_code: '',
        password: '',
        password_confirmation: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {user} = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({submitted: true});
    const {user} = this.state;
    const {dispatch} = this.props;
    if (user.name && user.email && user.password && user.password_confirmation) {
      user.group = user.email;
      user.authentication_code = user.email;
      dispatch(userActions.register({user: user}));
    }
  }

  render() {
    const {registering} = this.props;
    const {user, submitted} = this.state;
    return (
      <div className="center-form">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter your full name here"
                   value={user.name} onChange={this.handleChange}/>
            {submitted && !user.name &&
            <div className="help-block">First Name is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" placeholder="A valid email address"
                   value={user.email} onChange={this.handleChange}/>
            {submitted && !user.email &&
            <div className="help-block">Email is required</div>
            }
          </div>
          {/*<div className={'form-group' + (submitted && !user.group ? ' has-error' : '')}>*/}
            {/*<label htmlFor="group">Team Name</label>*/}
            {/*<input type="text" className="form-control" name="group"*/}
                   {/*placeholder="Make sure each team member input same team name" value={user.group}*/}
                   {/*onChange={this.handleChange}/>*/}
            {/*{submitted && !user.group &&*/}
            {/*<div className="help-block">Team Name is required</div>*/}
            {/*}*/}
          {/*</div>*/}
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={user.password}
                   onChange={this.handleChange}/>
            {submitted && !user.password &&
            <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.password_confirmation ? ' has-error' : '')}>
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input type="password" className="form-control" name="password_confirmation"
                   value={user.password_confirmation} onChange={this.handleChange}/>
            {submitted && !user.password_confirmation &&
            <div className="help-block">Password Confirmation is required</div>
            }
          </div>
          {/*<div className={'form-group' + (submitted && !user.authentication_code ? ' has-error' : '')}>
            <label htmlFor="authentication_code">Team Secret Token</label>
            <input type="password" className="form-control" name="authentication_code" value={user.authentication_code}
                   onChange={this.handleChange}/>
            {submitted && !user.authentication_code &&
            <div className="help-block">Team Secret Token is required</div>
            }
          </div>*/}
          <div className="form-group">
            <button className="btn btn-primary">Register</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {registering &&
            <img
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
            }
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {registering} = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export {connectedRegisterPage as RegisterPage};