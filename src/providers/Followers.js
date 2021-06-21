import API from "../service/API";

import { createContext, useState } from "react";
export const FollowersContext = createContext([]);

export const FollowersProvider = ({ children }) => {
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem("@Git:followers")) || []
  );

  const FollowersSearch = (name) => {
    API.get(`/users/${name}/followers`)
      .then((response) => {
        setFollowers(response.data);
        localStorage.setItem("@Git:followers", JSON.stringify(followers));
      })
      .catch((error) => console.log(error));
  };

  return (
    <FollowersContext.Provider value={{ followers, FollowersSearch }}>
      {children}
    </FollowersContext.Provider>
  );
};
