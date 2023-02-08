import React, { useState } from "react";
import Input from "./Input";

export default function PhoneInput() {
  const [getValue, setValue] = useState("");
  return (
    <Input
      wrapClassName="rounded-xl p-5"
      maxLength={15}
      setValue={setValue}
      getValue={getValue}
      onlyFieldRequired="Number"
      placeHolder="(___) ___-__-__"
    />
  );
}
