import { ChangeEvent, useEffect } from "react";

export default function useOnClickOutSide(ref: any, handler: any, insideElement: string) {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        if(document.querySelector(insideElement)?.contains(event.target)){
            return;
        }
        handler(event);
      };
  
      document.addEventListener("click", listener);
      return () => {
        document.removeEventListener("click", listener);
      };
    }, [ref, handler]);
  }