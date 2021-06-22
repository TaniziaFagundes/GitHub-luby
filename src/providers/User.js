import API from "../service/API";

import { createContext, useState } from "react";

import { useHistory } from "react-router";
export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Git:user")) || []
  );
  const [error, setError] = useState("");

  const history = useHistory();

  const UserSearch = (name) => {
    API.get(`/users/${name}`)
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("@Git:user", JSON.stringify(user));
        history.push("/home");
      })
      .catch((error) => setError(error));
  };

  return (
    <UserContext.Provider value={{ user, UserSearch, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};
