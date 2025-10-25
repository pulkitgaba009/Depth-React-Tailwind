import { useState ,useContext} from "react";
import UserContext from "../context/userContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    setUser({ username, password });
  };

  return (
    <>
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div>Username: {username}</div>
      <div>Password: {password}</div>
    </>
  );
}

export default App;
