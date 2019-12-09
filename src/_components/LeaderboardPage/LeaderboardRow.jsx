import React from 'react';
import { connect } from 'react-redux';

class LeaderboardRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <tr className="">
            <td className="">{this.props.rank}</td>
            <td className="">{this.props.row.best_submission.submitted_by.name}</td>
            <td className="">{this.props.row.best_submission.score}</td>
            <td className="">{this.props.row.best_submission.submission_time}</td>
        </tr>
      );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedLeaderboardRow = connect(mapStateToProps)(LeaderboardRow);
export { connectedLeaderboardRow as LeaderboardRow };