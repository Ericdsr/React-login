import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import jwt_decode from "jwt-decode";

const Home = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = token !== undefined;

  const decodeToken = (token) => {
    // fonction jwt_decode pour décoder le jeton
    return jwt_decode(token);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>You are logged in!</h1>
      ) : (
        <h1>You are not logged in.</h1>
      )}
      {isLoggedIn && (
        <p>Your email is: {decodeToken(token).username}</p>
      )}
    </div>
  );
};

export default Home;
