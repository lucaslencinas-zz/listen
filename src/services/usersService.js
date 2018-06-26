// const BASE_URI = 'https://api.spotify.com/v1';
const BASE_URI = '/api';

export function me(context) {
  const url = `${BASE_URI}/me`;
  const headers = {
    Authorization: `Bearer ${context.accessToken}`
  };

  return fetch(url, { headers })
    .then((response) => response.json());
}
