import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white dark:bg-dark-mode py-2 flex justify-center items-center">
      <p className="text-xs text-center text-dark-content dark:text-light-content">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          Eko Saputra Wijaya
        </a>
      </p>
    </footer>
  );
}

export default Footer;
