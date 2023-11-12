import { apiConfig } from "./constants";
import { checkResponse } from './checkResponse';

export const getUserInfo = async () => {
  const res = await fetch(apiConfig.user, {
    headers: apiConfig.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};

export const register = async ({ name, email, password }) => {
  const res = await fetch(apiConfig.register, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: `${name}`,
      psw: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const login = async ({ email, password }) => {
  const res = await fetch(apiConfig.login, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const logout = async () => {
  const res = await fetch(apiConfig.logout, {
    method: 'DELETE',
    headers: apiConfig.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};