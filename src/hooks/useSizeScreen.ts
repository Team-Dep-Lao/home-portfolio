import { useEffect, useState } from "react";

export default function useSizeScreen() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    onResize();
    document.addEventListener("resize", onResize);

    return () => document.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    height,
  };
}
