import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";

const SignPage = () => {

  const { login } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    e.prevenetDefault()
    if (username) {
      login(username);
      alert (`User ${username} regitered successfully`)
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <h2 className="login-title">зарегистрироватся</h2>
          <form action="" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="userName"
              value={password}
              onChange={(e) => setUsername(e.target.value)}
               />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
               />
            <button type="submit">Sign up </button>
            <Link to={"/login"}>войти в аккакнт если он есть</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignPage;
