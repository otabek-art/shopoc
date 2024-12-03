import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";

const LoginPage = () => {
  const { login, user } = useAppContext();
  const [username, setUsername] = useState("");

  console.log(user);

  const handleSignup = () => {
    e.prevenetDefault();
    if (username) {
      login(username);
      alert(`Welcome back,${username}`);
      setUsername('')
    }
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <h2 className="login-title">войти в аккаунт</h2>
          <form action="" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text" placeholder="password" />
            <button type="submit">login </button>
            <Link to={"/signup"}>зарегистрироватся</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
