import { AxiosResponse } from "axios";

const AUTH_LOCAL_STORAGE_KEY = "ctk";
const AUTH_TOKEN_KEY = "ctk";

export interface AuthModel {
  authToken: string;
  api_token: any;
  refreshToken?: string;
  accessToken?: string;
  data: any;
}

const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return;
  }
  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  if (!lsValue) {
    return;
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel;
    if (auth) {
      // You can easily check auth_token expiration also
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = JSON.stringify(auth);
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeAuth = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config: { headers: { etk: string } }) => {
      const auth = getAuth();
      if (auth && auth.api_token) {
        config.headers.etk = `${auth.api_token}`;
      }
      return config;
    },
    (err: any) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (response: any) => {
      if (response.headers[AUTH_TOKEN_KEY]) {
        localStorage.setItem(AUTH_TOKEN_KEY, response.headers[AUTH_TOKEN_KEY]);
        response.data.data = {
          api_token: response.headers[AUTH_TOKEN_KEY],
          data: response.data.data,
        };
      }
      if (response.data.status === 400) {
        console.log("error in auth helper axios setup");
      }
      return response.data;
    },
    (error: any) => {
      // need to handle specific Errors
      console.log("Something Went Wrong in auth helper axios setup", error);
    }
  );
}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY };
