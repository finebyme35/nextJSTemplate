import { useState, useEffect, useRef, useCallback } from "react";
const StickyHeader = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const tableRef = useRef<HTMLInputElement>(null);
  const toggleSticky = useCallback(
    ({ top, bottom }: any) => {
      if (top <= 0 && bottom > 2 * 68) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );
  useEffect(() => {
    const handleScroll = () => {
      if(tableRef.current){
        toggleSticky(tableRef.current.getBoundingClientRect());
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleSticky]);
  return { tableRef, isSticky };
};
export default StickyHeader;