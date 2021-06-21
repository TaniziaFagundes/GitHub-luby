import API from "../service/API";

import { createContext, useState } from "react";
export const FollowingContext = createContext([]);

export const FollowingProvider = ({ children }) => {
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem("@Git:following")) || []
  );

  const FollowingSearch = (name) => {
    API.get(`/users/${name}/following`)
      .then((response) => {
        setFollowing(response.data);
        localStorage.setItem("@Git:following", JSON.stringify(following));
      })
      .catch((error) => console.log(error));
  };

  return (
    <FollowingContext.Provider value={{ following, FollowingSearch }}>
      {children}
    </FollowingContext.Provider>
  );
};
