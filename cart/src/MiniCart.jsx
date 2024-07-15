import React, { useEffect, useState, useRef } from "react";
import { cart, clearCart } from "./cart";
import { currency } from "home1/products";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  useEffect(() => {
    if (showCart && cartRef.current) {
      const cartRect = cartRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (cartRect.right > windowWidth) {
        cartRef.current.style.left = `${windowWidth - cartRect.width}px`;
      } else if (cartRect.left < 0) {
        cartRef.current.style.left = "0px";
      }

      if (cartRect.bottom > windowHeight) {
        cartRef.current.style.top = `${windowHeight - cartRect.height}px`;
      } else if (cartRect.top < 0) {
        cartRef.current.style.top = "0px";
      }
    }
  }, [showCart]);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.length}
      </span>
      {showCart && (
        <div
          ref={cartRef}
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: "-10rem",
          }}
        >
          <div
            className="grid gap-3 text-sm"
            style={{
              gridTemplateColumns: "1fr 3fr 10fr 2fr",
            }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div>{item.quantity}</div>
                <img src={item.image} alt={item.name} className="max-h-6" />
                <div>{item.name}</div>
                <div className="text-right">
                  {currency.format(item.quantity * item.price)}
                </div>
              </React.Fragment>
            ))}
            <div></div>
            <div></div>
            <div></div>
            <div>
              {currency.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex-grow">
              <button
                id="clearcart"
                className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex-end">
              <button
                className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                onClick={clearCart}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
