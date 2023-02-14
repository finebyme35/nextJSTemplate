import { useEffect } from "react";
export const useScrollFix = (visible: boolean) => {
  const body = document.body;
  body.setAttribute("id", "body-scroll")
  
  useEffect(() => {
    const getBodyAttr = document.getElementById("body-scroll")
    if (visible && getBodyAttr) {
      body.setAttribute("class", "body-scroll-issue")
    }
    return () => {
      body.removeAttribute("class");
      body.removeAttribute("style");
    };
  }, [visible]);
};
