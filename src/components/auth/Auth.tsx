import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

import * as authHelper from "./AuthHelpers";
import axios from "axios";

type AuthContextProps = {
  auth: any | undefined;
  saveAuth: (auth: any) => void;
  currentUser: any;
  setCurrentUser: Dispatch<SetStateAction<any | undefined>>;
  logout: () => void;
  pic?: string;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
  pic: "",
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<any>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<any>();

  const saveAuth = (auth: any) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit = ({ children }: any) => {
  const { auth, logout, setCurrentUser } = useAuth();
  const didRequest = useRef(false);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  // const userData = useAuth()
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    const requestUser = async (apiToken: string) => {
      if (!didRequest.current) {
        let user = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASEURL}/user/auth/getuserbytoken`,
          {
            headers: {
              ctk: apiToken,
            },
            // withCredentials: true,
          }
        );
        if (user) {
          setCurrentUser(user);
        } else {
          if (!didRequest.current) {
            logout();
          }
        }
        setShowSplashScreen(false);
      }

      return () => (didRequest.current = true);
    };
    if (auth && auth.api_token) {
      requestUser(auth.api_token);
    } else {
      logout();
      setShowSplashScreen(false);
    }
    // eslint-disable-next-line
  }, []);

  return showSplashScreen ? (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading...</p>
      </div>
    </>
  ) : (
    <>{children}</>
  );
};

export { AuthProvider, AuthInit, useAuth };
