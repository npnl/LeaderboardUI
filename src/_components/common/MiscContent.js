import {connect} from 'react-redux';
var React = require('react');

class MiscContent extends React.Component {
  render() {
    return (
      <div className="center">
        <h1>Deadline: TBA</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>How to participate: TBA</h1>
      </div>
    );
  }
}
;

function mapStateToProps(state) {
  return {};
}

const connectedMiscContent = connect(mapStateToProps)(MiscContent);
export {connectedMiscContent as MiscContent};

export default MiscContent;
