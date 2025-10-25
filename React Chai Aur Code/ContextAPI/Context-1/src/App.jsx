import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>React with Chai</h1>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </>
  );
}

export default App;
