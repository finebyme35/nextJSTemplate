import React, { useMemo, useRef, useState } from "react";
import useOnClickOutSide from "hooks/onClickOutside";
interface OptionArray {
  id: number | string;
  value: number | string;
  label: number | string;
}

interface IProps {
  placeHolder: string;
  options: Array<OptionArray>;
  setSelectedValue: Function;
  selectedValue?: OptionArray | null;
  selectedArrayValue?: Array<OptionArray> | null;
  isMulti?: boolean;
  wrapClassName?: string;
  outsideClickClassName: string;
  ClosedIconChange?: React.ReactElement;
  ChangeIcon?: React.ReactElement;
  isSearchable?: boolean;
}

const Icon = () => {
  return (
        <svg height="20" width="20" viewBox="0 0 20 20">
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>

  );
};
const CloseIcon = () => {
  return (
        <svg height="20" width="20" viewBox="0 0 20 20">
          <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
  );
};

export default function Dropdown({ ...props }: IProps) {
  const refDropdown = useRef(null);
  const searchRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useOnClickOutSide(
    refDropdown,
    () => {
      setShowMenu(false);
    },
    props.outsideClickClassName
  );
  useMemo(() => {}, [showMenu]);
  useMemo(() => {}, [props.selectedArrayValue, props.selectedValue]);
  useMemo(() => {setSearchValue("");
  if (showMenu && searchRef.current) {
      searchRef.current;
  }},[])
  const removeOption = (option: OptionArray) => {
    return props.selectedArrayValue?.filter(
      (o: any) => o.value != option.value
    );
  };
  const onTagRemove = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    option: OptionArray
  ) => {
    e.stopPropagation();
    props.setSelectedValue(removeOption(option));
  };
  const getDisplayArray = () => {
    if (!props.selectedArrayValue || props.selectedArrayValue.length <= 0) {
      return props.placeHolder;
    } else if (props.selectedArrayValue.length > 0 && props.isMulti) {
      return (
        <div className="dropdown-tags">
          {props.selectedArrayValue.map((option: OptionArray) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                  onTagRemove(e, option)
                }
                className="dropdown-tag-close"
              >
                {props.ClosedIconChange ? props.ClosedIconChange : <CloseIcon />}
              </span>
            </div>
          ))}
        </div>
      );
    }
  };
  const getDisplay = () => {
    if (props.selectedValue) {
      return props.selectedValue.label;
    }
    return props.placeHolder;
  };
  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };
  const onItemClick = (option: OptionArray) => {
    let newValue;
    if (props.isMulti && props.selectedArrayValue) {
      if (
        props.selectedArrayValue.findIndex(
          (o: any) => o.value === option.value
        ) >= 0
      ) {
        newValue = removeOption(option);
      } else {
        newValue = [...props.selectedArrayValue, option];
      }
    } else {
      newValue = option;
    }
    props.setSelectedValue(newValue);
    setShowMenu(false);
  };
  const onSearch = (e:any) => {
    setSearchValue(e.target.value);
};
const getOptions = () => {
    if (!searchValue) {
        return props.options;
    }
    return props.options.filter((option) => option.label.toString().toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
};
  return (
    <div
      className={
        props.wrapClassName ? props.wrapClassName : "dropdown-container"
      }
    >
      <div
        className="dropdown-input"
        onClick={handleInputClick}
        ref={refDropdown}
      >
        <div className="dropdown-selected-value">
          {props.isMulti ? getDisplayArray() : getDisplay()}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            {props.ChangeIcon ? props.ChangeIcon : <Icon  />}
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="dropdown-menu">
            {props.isSearchable ? (
        <div className="search-box">
            <input onChange={onSearch} value={searchValue} ref={searchRef} className="outline-none" />
        </div>
    ) : ""}
          {props.isSearchable ? getOptions().map((option: OptionArray) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.id}
              className="dropdown-item"
            >
              {option.label}
            </div>
          )) : props.options.map((option: OptionArray) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.id}
              className="dropdown-item"
            >
              {option.label}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
