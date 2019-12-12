import { connect } from 'react-redux';
var React = require('react');

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="parallax">
        <div id="container">
          <div id="content">
            <h1 className="title-heading">
              <span className="title-desc">ATLAS Stroke Lesion Challenge</span><br/>
              Placeholder for the description.
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {};
}

const connectedWelcomePage = connect(mapStateToProps)(WelcomePage);
export { connectedWelcomePage as WelcomePage };

export default WelcomePage;
