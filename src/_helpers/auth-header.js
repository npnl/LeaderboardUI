export function authHeader() {
    // return authorization header with jwt token
    let access_token = localStorage.getItem('access_token_leaderboard');

    if (access_token) {
        return { 'Authorization': access_token, 'Content-Type': 'application/json'};
    } else {
        return {'Content-Type': 'application/json'};
    }
}