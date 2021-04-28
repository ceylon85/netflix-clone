import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//페이지 렌더링 시 스크롤을 가장 상단에 고정
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}