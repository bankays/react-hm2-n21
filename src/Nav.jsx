import "./Nav.css";
import { Fragment } from "react";
import React from "react";
function Nav() {
  const username = "John";
  function check() {
    if (username === "John") return "boss";
    return "user";
  }
  return (
    <Fragment>
      <React.Fragment>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>home</li>
            <li>about {check()}</li>
            <li>welcome {username === "John" ? "boss" : "use"}</li>
          </ul>
        </nav>
      </React.Fragment>
    </Fragment>
  );
}
export default Nav;
/// conditional rendering welcome
// toliq interpolation about
