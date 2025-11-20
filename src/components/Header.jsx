import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <h1 className="text-purple-500">My Website</h1>
        <nav>
          <ul className="list-disc pl-6">
            <li>
              <a className="text-blue-500 hover:text-amber-500 hover:underline hover:scale-105 transition-all duration-100" href="/">Home</a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-amber-500 hover:underline hover:scale-105 transition-all duration-100" href="/">About</a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-amber-500 hover:underline hover:scale-105 transition-all duration-100" href="/">Services</a>
            </li>
          </ul>
        </nav>
      </header>
      <br />
      <hr />
      <br />
    </>
  );
};

export default Header;
