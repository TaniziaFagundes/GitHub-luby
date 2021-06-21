import API from "../service/API";

import { createContext, useState } from "react";

export const ReposContext = createContext([]);

export const ReposProvider = ({ children }) => {
  const [repos, setRepos] = useState(
    JSON.parse(localStorage.getItem("@Git:repos")) || []
  );

  const reposSearch = (name) => {
    API.get(`/users/${name}/repos`)
      .then((response) => {
        setRepos(response.data);
        localStorage.setItem("@Git:repos", JSON.stringify(repos));
      })
      .catch((error) => console.log(error));
  };

  return (
    <ReposContext.Provider value={{ repos, reposSearch }}>
      {children}
    </ReposContext.Provider>
  );
};
