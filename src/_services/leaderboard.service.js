import { serverConstants } from '../_constants'
import { userService } from './user.service'

export const leaderboardService = {
  getLeaderboard
};

function getLeaderboard() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${serverConstants.BASE_URL}/leaderboard`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        window.location.reload(true);
      }

      const error = (data && data.errors && data.errors[0]) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}