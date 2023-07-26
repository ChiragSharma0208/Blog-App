import {Link} from "react-router-dom";
import {useContext, useEffect, } from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, );

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create" className="create">Create new post</Link>
            <a onClick={logout} className="logout">Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"><button  class="btn btn-light" style={{borderColor:"black"}}>Login</button></Link>
            <Link to="/register"><button class="btn btn-dark">Register</button></Link>
          </>
        )}
      </nav>
    </header>
  );
}
