import React, { useState, useEffect } from "react";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const height = screenWidth < 1250 ? "80px" : "auto";

  return (
    <>
      <footer className="text-white text-center py-4 bottom-0 w-full">
        <p className="m-0 text-m text-red-500 font-bold italic">
          Designed and built by <u>Yogesh Saini</u>
        </p>
        <p style={{ height: height }}></p>
      </footer>
    </>
  );
};

export default Footer;
