import { serverConstants } from '../_constants';

export function leaderboard(state = {}, action) {
  switch (action.type) {
    case serverConstants.GET_LEADERBOARD_SCORES:
      return {
        loading: true
      };
    case serverConstants.GET_LEADERBOARD_SCORES_SUCCESS:
      return {
        scores: action.scores
      };
    case serverConstants.GET_LEADERBOARD_SCORES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}