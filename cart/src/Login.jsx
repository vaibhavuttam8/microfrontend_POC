import React, { useState, useEffect, useRef } from "react";
import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");
  const popupRef = useRef(null);

  useEffect(() => {
    if (showLogin && popupRef.current) {
      const popupRect = popupRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (popupRect.right > windowWidth) {
        popupRef.current.style.left = `${windowWidth - popupRect.width}px`;
      } else if (popupRect.left < 0) {
        popupRef.current.style.left = "0px";
      }

      if (popupRect.bottom > windowHeight) {
        popupRef.current.style.top = `${windowHeight - popupRect.height}px`;
      } else if (popupRect.top < 0) {
        popupRef.current.style.top = "0px";
      }
    }
  }, [showLogin]);

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          ref={popupRef}
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: "-10rem",
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
