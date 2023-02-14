import React from "react";

interface IProps {
  name: string;
  id: string;
  checked: boolean;
  setChecked: Function;
  dataYes: string;
  dataNo: string;
  disabled?: boolean;
  small?: boolean;
}

export default function Switch({ ...props }: IProps) {
    const handleKeyPress =(e: any) => {
        if (e.keyCode != 32) return;
        e.preventDefault();
        props.setChecked(!props.checked)
      }
  return (
    <div className={"toggle-switch" + (props.small ? " small-switch" : "")}>
      <input
        type="checkbox"
        name={props.name}
        className="toggle-switch-checkbox"
        id={props.id}
        checked={props.checked}
        onChange={(e) => props.setChecked(e.target.checked)}
        disabled={props.disabled}
      />
      {props.id ? (
        <label className="toggle-switch-label" htmlFor={props.id}  tabIndex={ props.disabled ? -1 : 1 }
        onKeyDown={ e => handleKeyPress(e) }>
          <span
            className={
              props.disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={props.dataYes}
            data-no={props.dataNo}
            tabIndex={-1}
          />
          <span
            className={
              props.disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
}
