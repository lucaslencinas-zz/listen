export function list() {
  const url = '/api/songs';

  return fetch(url)
    .then((response) => response.json());
}

export function get(songId) {
  const url = `/api/songs/${songId}`;

  return fetch(url)
    .then((response) => response.json(response));
}
