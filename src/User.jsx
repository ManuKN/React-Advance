import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Authuntication";
import { useSelector } from "react-redux";

// const FAKE_USER = {
//     name: "Manu",
//     email: "Manu@example.com",
//     password: "Password",
//     avatar: "https://i.pravatar.cc/100?u=zz",
//   };

function User() {
  const data  = useSelector((state) => state.user)
    const{logout} = useAuth()
    //const user = FAKE_USER;
  const navigate = useNavigate()
  function handleClick(e) {
    e.preventDefault();
    logout()
    navigate('/')
  }
  return (
    <div className="Logout">
      <span>Welcome, {data.username}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default User