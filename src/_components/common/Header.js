import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserAdmin } from '../../_helpers'
var React = require('react');

class Header extends React.Component {
  render() {
    const { current_user, loggedIn, flashMessages } = this.props;
    var component = (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />);
    if (loggedIn && current_user && current_user.name) {
      component = (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div id="navbar" className="collapse navbar-collapse">
                  <Link className="navbar-brand" to="/">Home</Link>
                  <ul className="nav navbar-nav">
                    <li><Link to="/NewSubmission">New Submission</Link></li>
                    {/*<li><Link to="/AddRouterLinkHere">Heading</Link></li>*/}

                    <li className="header-logout"><Link to="/login">Logout({current_user.name})</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className={"alert fade in custom-alert " + (flashMessages.type !== undefined ? flashMessages.type : 'custom-alert-hide')}>
            <a href="#" className="close" data-dismiss="alert">&times;</a>
            <strong>{flashMessages.type !== undefined ?(flashMessages.type === 'alert-success' ? 'Success!' : 'Failure!') : ''}</strong> {flashMessages.message !== undefined ? flashMessages.message : ''}
          </div>
        </div>);
    }
    return (
      {...component}
    );
  }
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { current_user, loggedIn } = authentication;
  const {flashMessages} = state;
  return { current_user, loggedIn, flashMessages };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };

export default Header;
