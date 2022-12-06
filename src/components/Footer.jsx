//4. Create a Footer.jsx component that renders a <footer> element
import React from "react";

function Footer() {
  const today = new Date();
  const dd = String(today.getFullYear());
  return (
    <footer>
      <p>Copyright © {dd}</p>
    </footer>
  );
}

export default Footer;
