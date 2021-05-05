import React from "react";
import { useGlobalContext } from "../context";

function Content() {
  const { clicked } = useGlobalContext();

  return (
    <section className="content-container">
      {clicked &&
        clicked.map((item, index) => {
          return <h3>You clicked at {item} </h3>;
        })}
    </section>
  );
}

export default Content;
