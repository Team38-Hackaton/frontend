const BASE_URL = 'https://flask-andersgrunge.cloud.okteto.net';

export const apiConfig = {
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  login: `${BASE_URL}/login`,
  register: `${BASE_URL}/register`,
  logout: `${BASE_URL}/logout`,
  profile: `${BASE_URL}/profile`,
};