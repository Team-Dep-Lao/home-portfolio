import { useState, useEffect } from "react";

interface ScrollState {
  isScrollingUp: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

export const useScroll = (): ScrollState => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Kiểm tra hướng scroll
    if (currentScrollY > lastScrollY && isScrollingUp) {
      setIsScrollingUp(false); // Đổi từ lên xuống
    } else if (currentScrollY < lastScrollY && !isScrollingUp) {
      setIsScrollingUp(true); // Đổi từ xuống lên
    }

    // Kiểm tra trạng thái top và bottom
    setIsAtTop(currentScrollY === 0);
    setIsAtBottom(currentScrollY + windowHeight >= documentHeight);

    // Lưu vị trí hiện tại
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isScrollingUp]);

  return { isScrollingUp, isAtTop, isAtBottom };
};
