import {connect} from 'react-redux';
var React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div>
          <span>Copyright &copy; NPNL</span>
        </div>
      </footer>
    );
  }
}
;

function mapStateToProps(state) {
  return {};
}

const connectedFooter = connect(mapStateToProps)(Footer);
export {connectedFooter as Footer};

export default Footer;
