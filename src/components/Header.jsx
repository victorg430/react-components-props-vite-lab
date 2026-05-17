import React from "react";

function Header({ name }) {
  return (
    <header>
      {/* Renders the dynamic blog name passed down from App */}
      <h1>{name}</h1>
    </header>
  );
}

export default Header;