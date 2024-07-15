//manage cart and authentication side
import React, {useEffect, useState} from "react"
import {BehaviorSubject, from} from "rxjs"

const API_SERVER ="http://localhost:8080"

//takes user name password, sends it along
export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject(null)

export const getCart = () =>
  fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      cart.next(res);
      return res;
    });

export const addToCart = (id) =>
  fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });


export const clearCart = () =>
  fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });



export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, //send along username password
      body: JSON.stringify({
        username,
        password,
      }),
    }) //get back response
      .then((res) => res.json())
      .then((data) => {
        //we call access_token when we get the token from pasword 
        jwt.next(data.access_token);
        getCart();
        return data.access_token;
      });

    export function useLoggedIn() {
      const [loggedIn, setLoggedIn] = useState(!!jwt.value);
      useEffect(() => {
        setLoggedIn(!!jwt.value);
        return jwt.subscribe((c) => {
          setLoggedIn(!!jwt.value);
        });
      }, []);
      return loggedIn;
    }