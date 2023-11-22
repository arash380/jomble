import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return width;
};

export default useWindowWidth;
