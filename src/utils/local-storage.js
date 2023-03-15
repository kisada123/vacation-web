const ACCESS_TOKEN = "ACCESS_TOKEN";
const ACCESS_TOKEN_ADMIN = "ACCESS_TOKEN_ADMIN";
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const getAccessTokenAdmin = () =>
  localStorage.getItem(ACCESS_TOKEN_ADMIN);
export const setAccessToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);
export const setAccessTokenAdmin = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN_ADMIN, accessToken);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const removeAccessTokenAdmin = () =>
  localStorage.removeItem(ACCESS_TOKEN_ADMIN);
