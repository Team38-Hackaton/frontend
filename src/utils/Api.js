import { apiConfig } from "./constants";
import { checkResponse } from './checkResponse';

export const getUserInfo = async (token) => {
  const res = await fetch(apiConfig.main, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  });
  return checkResponse(res);
};

export const register = async ({ username, email, password }) => {
  const res = await fetch(apiConfig.register, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: `${username}`,
      psw: `${password}`,
      email: `${email}`
    }),
  });
  return checkResponse(res);
};

export const login = async ({ email, password }) => {
  const res = await fetch(apiConfig.login, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      psw: `${password}`,
      email: `${email}`
    }),
  });
  return checkResponse(res);
};