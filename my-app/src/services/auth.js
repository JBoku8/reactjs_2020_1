import axios from "axios";

import { BASE_API_URL, USER_SESSION_TOKEN_KEY } from "../constants";

axios.defaults.baseURL = BASE_API_URL;

export const login = async (requestData) => {
  try {
    const response = await fetch(`${BASE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const responseData = await response.json();
      return {
        response: responseData,
        error: !response.ok,
      };
    } else {
      return {
        error: !response.ok,
        status: response.status,
      };
    }
  } catch (err) {
    console.error("ERROR [auth.js]@login", err);
  }
};

export const loginAxios = async (requestData) => {
  try {
    const result = await axios.post(`login`, requestData);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const setUserSessionToken = (token) => {
  sessionStorage.setItem(USER_SESSION_TOKEN_KEY, token);
};
export const getUserSessionToken = () => {
  return sessionStorage.getItem(USER_SESSION_TOKEN_KEY);
};
export const removeUserSessionToken = () => {
  sessionStorage.removeItem(USER_SESSION_TOKEN_KEY);
};

// HTTP Verbs
// GET mysite.com/users?limit=20&page=2
// GET mysite.com/users/:id => mysite.com/users/7365375 => userDetailFunction()
// POST mysite.com/users => postFunction()
// DELETE mysite.com/users/:id => mysite.com/users/7365375 deleteFunction()
// PUT mysite.com/users/:id => mysite.com/users/7365375 putFunction()
// PATCH mysite.com/users/:id => mysite.com/users/7365375 patchFunction()

// GET mysite.com/user-detail/:id
// POST mysite.com/user/create-user
// POST mysite.com/user/remove-user
// POST mysite.com/user/update-user
