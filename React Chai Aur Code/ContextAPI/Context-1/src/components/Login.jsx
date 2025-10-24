import { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <h2>Log in</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => (e.target.value = setUsername)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => (e.target.value = setPassword)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
