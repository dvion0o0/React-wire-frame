import React from "react";
import { useGlobalContext } from "../context";

function Footer() {
  const { clickCount } = useGlobalContext();

  return (
    <footer className="footer">
      <h2>You clicked {clickCount} times</h2>
    </footer>
  );
}

export default Footer;
