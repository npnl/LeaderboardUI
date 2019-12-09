import React from 'react';
import {connect} from 'react-redux';
import {LeaderboardRow} from "."
import {leaderboardActions} from '../../_actions';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(leaderboardActions.getLeaderboard());
  }



  flattenData(data) {
    var ans = [];
    for(var i = 0; i < data.length; i++) {
      var val = {"rank": data[i].rank,
        "score": data[i].best_submission.score,
        "submitted_by": data[i].best_submission.submitted_by.name,
        "submission_time": data[i].best_submission.submission_time,
      "submissions": data[i].submissions};
      ans.push(val);
    }
    return ans;
  }

  render() {
    const {leaderboard} = this.props;
    console.log(leaderboard.scores);
    var flattenedData = this.flattenData(leaderboard.scores || []);
    return (
      <div className="center">
        <h1>Leaderboard</h1>

        <BootstrapTable data={flattenedData} striped={true} hover={true}>
          <TableHeaderColumn dataField="rank" isKey={true} dataAlign="center" dataSort={true}>Rank</TableHeaderColumn>
          <TableHeaderColumn dataField="submitted_by" dataSort={true} dataAlign="center">Username</TableHeaderColumn>
          <TableHeaderColumn dataField="score" dataSort={true} dataAlign="center">Score</TableHeaderColumn>
          <TableHeaderColumn dataField="submission_time" dataSort={true} dataAlign="center">Submission Time</TableHeaderColumn>
          <TableHeaderColumn dataField="submissions" dataSort={true} dataAlign="center">Total Submission</TableHeaderColumn>


        </BootstrapTable>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {leaderboard: state.leaderboard};
}

const connectedLeaderboardPage = connect(mapStateToProps)(LeaderboardPage);
export {connectedLeaderboardPage as LeaderboardPage};