import UserContext from "../context/userContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  console.log("Current user from context:", user); 

  if (!user) return <div>Please login ...</div>;

  return <div>WELCOME {user.username}</div>;
}

export default Profile;
