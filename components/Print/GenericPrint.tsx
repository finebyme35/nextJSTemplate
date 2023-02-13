import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Printer } from "tabler-icons-react";

interface IPage {
  content: JSX.Element;
  text: string;
  customClassIcon?: string;
  customClassButton?: string;
  customClassText?: string;
}

export default function GenericPrint({ content, text, customClassIcon,customClassButton, customClassText }: IPage) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>{content}</div>
      </div>
      <button className={customClassButton ? customClassButton : "flex items-center"} onClick={handlePrint}>
        <Printer
          size={14}
          strokeWidth={2}
          className={customClassIcon ? customClassIcon : "text-onBlue-50 md:block hidden"}
        />
        <span className={customClassText ? customClassText : "pl-1"}>
          {text}
        </span>
      </button>
    </div>
  );
}
