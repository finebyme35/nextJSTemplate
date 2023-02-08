import React, { ChangeEvent, useMemo, useRef, useState } from "react";
import { Eye, EyeOff } from 'tabler-icons-react';
import {
  inputCurrencyFormatHelper,
  inputDefaultSevenNumberAutoDotValue,
  inputNumberHelper,
  inputNumberHelperDot,
  inputNumberHelperWithoutMinus,
  inputNumberHelperWithStringToUpperAndLower,
  inputStringHelperTwo,
  maskPhone,
} from "utils/inputHelper";

type MyEnum =
  | "Number"
  | "NumberAndString"
  | "String"
  | "NumberAndDot"
  | "AutoDot"
  | "Currency";

type passwordType = {
  color: string;
  size: number;
  wrapClassName: string;
}


interface IProps {
  onlyFieldRequired?: MyEnum;
  wrapClassName?: string;
  getValue: string | number;
  setValue: Function;
  maxLength?: number;
  placeHolder?: string;
  password?: boolean;
  passwordType?: passwordType;
  leftEye?: boolean;
  type?: string;
}

export default function Input({
  ...props
}: IProps) {
  const inputCard = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState<boolean>(false);
  useMemo(() => {
  },[props.getValue])
  useMemo(() => {},[visible])
  const switchFunctionSetValue = (event: ChangeEvent<HTMLInputElement>) => {
    switch (props.onlyFieldRequired) {
      case 'Number':
        props.setValue(inputNumberHelper(event));
        break;
      case "NumberAndString":
        props.setValue(inputNumberHelperWithStringToUpperAndLower(event));
        break;
      case "String":
        props.setValue(inputStringHelperTwo(event));
        break;
      case "NumberAndDot":
        props.setValue(inputNumberHelperDot(event));
        break;
      default:
        break;
    }
  };
  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onlyFieldRequired == "Currency"){
        let value = inputCurrencyFormatHelper(inputNumberHelperWithoutMinus(event))
        props.setValue(value)
        
    }
    else if(props.onlyFieldRequired == "Number" && props.maxLength == 15){
      const value = maskPhone(inputCard?.current?.value!)
      props.setValue(value)
    }
    else if (props.onlyFieldRequired == "Number" && props.maxLength == 7) {
      props.setValue(
        inputDefaultSevenNumberAutoDotValue(
          inputNumberHelper(event),
          event.target.value.length
        )
      );
    } else if(props.onlyFieldRequired){
      switchFunctionSetValue(event);
      
    }else{
      props.setValue(event.target.value);
    }
    
  };

  const changeMaxLength = () => {
    if(props.maxLength){
      return props.maxLength;

    }else{
      return undefined;
    }
  };

  const changeInput = () => {
    setVisible(!visible)
  }



  return (
    <div className={props.password ? "w-full h-full" : ""}>
      <div className={props.password ? "container w-[210px]" : ""} >
      <div className={props.password ? "relative w-full" : ""}>
    <input
      type={props.type ? visible ? "text" : props.type : "text"}
      className={props.leftEye ? "outline-none pl-[3rem] " + props.wrapClassName : "outline-none block " + props.wrapClassName}
      maxLength={changeMaxLength()}
      min="0"
      value={props.getValue?.toString() || ""}
      onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeEvent(event)}
      ref={inputCard}
      placeholder={props.placeHolder}
      
    />
    {!visible && props.password ? <span className={props.leftEye ? "absolute top-[39%] ml-[15px] " : "flex items-center absolute top-[37%] right-0"}>
      <Eye
    size={props.passwordType?.size}
    strokeWidth={2}
    color={props.passwordType?.color}
    className={props.leftEye ? "cursor-pointer " + props.passwordType?.wrapClassName : "cursor-pointer " + props.passwordType?.wrapClassName}
    onClick={() => changeInput()}
  />
    </span> : ""}
  {visible ? <span className={props.leftEye ? "absolute top-[39%] ml-[15px] " : "flex items-center absolute top-[37%] right-0"}><EyeOff
   size={props.passwordType?.size}
   strokeWidth={2}
   color={props.passwordType?.color}
   className={props.leftEye ? "cursor-pointer " + props.passwordType?.wrapClassName : "cursor-pointer " + props.passwordType?.wrapClassName}
   onClick={() => changeInput()}
  /></span> : "" }
    </div>
      </div>
    </div>
  );
}
