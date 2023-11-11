const BASE_URL = '';

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