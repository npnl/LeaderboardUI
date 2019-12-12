import React from 'react';
import { connect } from 'react-redux';
import { LeaderboardPage } from '../LeaderboardPage'
import { WelcomePage } from '../common/WelcomePage'
import { Footer } from '../common/Footer'
import { MiscContent } from '../common/MiscContent'

class HomePage extends React.Component {

    render() {
        return (
          <div>
              <WelcomePage />
              <LeaderboardPage/>
              <MiscContent />
              <Footer />
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };