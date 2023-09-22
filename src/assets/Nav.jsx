import React from "react";
import navLogo from "../assets/tb.png";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <nav className=" bg-cyan-100 p-[.5rem]">
      <div className="wrapper flex items-center justify-between">
        {isUser && user.picture && (
          <div>
            <img
              className="w-[20px] cursor-pointer"
              src={user.picture}
              alt="user.name"
            />
          </div>
        )}
        {isUser && user.name && (
          <div>
            Welcome{" "}
            <b>
              <strong>{user.name}</strong>
            </b>
          </div>
        )}
        {isUser ? (
          <button
            onClick={() => {
              logout({
                returnTo: "https://image-gallery-drag-and-drop.netlify.app/",
              });
            }}
          >
            Logout
          </button>
        ) : (
          <button className="mx-auto font-bold" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
