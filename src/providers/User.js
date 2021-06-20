import API from "../service/API";

import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const UserSearch = (name) => {
    API.get("/users/" + name)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider value={{ user, UserSearch }}>
      {children}
    </UserContext.Provider>
  );
};
