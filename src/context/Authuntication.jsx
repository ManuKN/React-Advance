// Authuntication.jsx
import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Name, login, logout } from "../AppSlice";

const AuthContext = createContext();

function Authuntication({ children }) {

  Authuntication.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const dispatch = useDispatch();
  const { user, isAuthenticated , username } = useSelector((state) => state.user);

  const handleLogin = (email, password) => {
    const dummyUser = {
      email: "Manu@example.com",
      password: "Password",
      name: "Manu",
      avatar: "https://i.pravatar.cc/100?u=zz",
  };

   
    if (email === dummyUser.email && password === dummyUser.password) {
      dispatch(login(dummyUser));
    } else {
     
      console.log("Incorrect email or password");
    }
  };

  const handleLogout = () => {
    dispatch(logout()); 
  };

  const handleName = (name) => {
    dispatch(Name(name))
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, username , login: handleLogin, logout: handleLogout , FirstName:handleName }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { Authuntication, useAuth };
