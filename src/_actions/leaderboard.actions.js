import {serverConstants} from '../_constants';
import {leaderboardService} from '../_services';

export const leaderboardActions = {
  getLeaderboard
};

function getLeaderboard() {
  return dispatch => {
    dispatch(request());

    leaderboardService.getLeaderboard()
      .then(
        scores => dispatch(success(scores)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return {type: serverConstants.GET_LEADERBOARD_SCORES}
  }

  function success(scores) {
    return {type: serverConstants.GET_LEADERBOARD_SCORES_SUCCESS, scores}
  }

  function failure(error) {
    return {type: serverConstants.GET_LEADERBOARD_SCORES_FAILURE, error}
  }
}