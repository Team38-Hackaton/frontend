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
  const res = await fetch(apiConfig.signUp, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: `${name}`,
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const login = async ({ email, password }) => {
  const res = await fetch(apiConfig.signIn, {
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
  const res = await fetch(apiConfig.signOut, {
    method: 'DELETE',
    headers: apiConfig.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};

export const editProfile = async ({ name, email }) => {
  const res = await fetch(apiConfig.user, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res); 
};