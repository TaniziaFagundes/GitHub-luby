import Routes from "./router";

import { UserProvider } from "./providers/User";
import { FollowersProvider } from "./providers/Followers";
import { FollowingProvider } from "./providers/Following";
import { ReposProvider } from "./providers/Repos";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <FollowersProvider>
          <FollowingProvider>
            <ReposProvider>
              <Routes />
            </ReposProvider>
          </FollowingProvider>
        </FollowersProvider>
      </UserProvider>
    </div>
  );
}

export default App;
