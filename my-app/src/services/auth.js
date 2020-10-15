import { BASE_API_URL, USER_SESSION_TOKEN_KEY } from "../constants";
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

export const setUserSessionToken = (token) => {
  sessionStorage.setItem(USER_SESSION_TOKEN_KEY, token);
};
export const getUserSessionToken = () => {
  return sessionStorage.getItem(USER_SESSION_TOKEN_KEY);
};
export const removeUserSessionToken = () => {
  sessionStorage.removeItem(USER_SESSION_TOKEN_KEY);
};
