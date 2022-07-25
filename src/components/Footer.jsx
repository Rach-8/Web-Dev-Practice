import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Rachit Bhatia & Breno Faria , {currentYear}</p>
    </footer>
  );
}

export default Footer;
