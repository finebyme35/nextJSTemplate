import React, { useMemo } from "react";
import Input from "./Input";

interface IProps {
  wrapClassName?: string;
  getValueMin: number;
  getValueMax: number;
  setValueMax: any;
  setValueMin: any;
  insideWrapClassName?: string;
}

export default function InputMinMax({
  ...props
}: IProps) {
  useMemo(() => {}, [props.getValueMin, props.getValueMax]);
  return (
    <div
      className={
        props.wrapClassName
          ? props.wrapClassName
          : "flex justify-start gap-3 p-5 align-middle items-center"
      }
    >
      <Input
        onlyFieldRequired="Number"
        maxLength={7}
        getValue={props.getValueMin}
        setValue={props.setValueMin}
        wrapClassName={props.insideWrapClassName}
      />
      <Input
        onlyFieldRequired="Number"
        maxLength={7}
        getValue={props.getValueMax}
        setValue={props.setValueMax}
        wrapClassName={props.insideWrapClassName}
      />
    </div>
  );
}
