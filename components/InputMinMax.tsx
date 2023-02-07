import React, { useMemo } from "react";
import Input from "./Input";

interface IProps {
  wrapClassName?: string;
  getValueMin: string;
  getValueMax: string;
  setValueMax: any;
  setValueMin: any;
  insideWrapClassNameMin?: string;
  insideWrapClassNameMax?: string;
  childOnlyFieldRequiredMax: any;
  childOnlyFieldRequiredMin: any;
  childMaxLength: number;
  childMinLength: number;
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
        onlyFieldRequired={props.childOnlyFieldRequiredMin}
        maxLength={props.childMinLength}
        getValue={props.getValueMin}
        setValue={props.setValueMin}
        wrapClassName={props.insideWrapClassNameMin}
      />
      <Input
        onlyFieldRequired={props.childOnlyFieldRequiredMax}
        maxLength={props.childMaxLength}
        getValue={props.getValueMax}
        setValue={props.setValueMax}
        wrapClassName={props.insideWrapClassNameMax}
      />
    </div>
  );
}
