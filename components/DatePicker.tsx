import useOnClickOutSide from "hooks/onClickOutside";
import React, { useRef, useState } from "react";
import {
  month,
  todayTimestamp,
  year,
  getMonthDetails,
  getDateFromDateString,
  getDateStringFromTimestamp,
  getMonthStr,
} from "utils/DatePickerHelper";

interface IProps {
  setValue: Function;
  getValue: string;
}

export default function DatePicker({ ...props }: IProps) {
  const [getState, setState] = useState({
    year,
    month,
    selectedDay: todayTimestamp,
    monthDetails: getMonthDetails(year, month),
  });
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const refDatePicker = useRef(null);

  useOnClickOutSide(
    refDatePicker,
    () => {
      setShowDatePicker(false);
    },
    "mdp-input"
  );
  const openDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const isCurrentDay = (day: any) => {
    return day.timestamp === todayTimestamp;
  };
  const isSelectedDay = (day: any) => {
    return day.timestamp === getState.selectedDay;
  };
  const setDate = (dateData: any) => {
    let selectedDay = new Date(
      dateData.year,
      dateData.month - 1,
      dateData.date
    ).getTime();
    setState({ ...getState, selectedDay: selectedDay });
    // if(this.props.onChange) {
    //     this.props.onChange(selectedDay);
    // }
  };
  const updateDateFromInput = (event: any) => {
      let dateValue = event.target.value;
      let dateData = getDateFromDateString(dateValue);
      if (dateData !== null) {
        setDate(dateData);
        setState({
          ...getState,
          year: dateData.year,
          month: dateData.month - 1,
          monthDetails: getMonthDetails(dateData.year, dateData.month - 1),
        });
    }
  };

  const setDateToInput = (timestamp: number) => {
    let dateString = getDateStringFromTimestamp(timestamp);
    props.setValue(dateString);
  };

  const onDateClick = (day: any) => {
    setState({ ...getState, selectedDay: day.timestamp });
    setDateToInput(day.timestamp);
    // if(this.props.onChange) {
    //     this.props.onChange(day.timestamp);
    // }
  };

  const setYear = (offset: any) => {
    let year = getState.year + offset;
    let month = getState.month;
    setState({
      ...getState,
      year,
      monthDetails: getMonthDetails(year, month),
    });
  };

  const setMonth = (offset: any) => {
    let year = getState.year;
    let month = getState.month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    setState({
      ...getState,
      year,
      month,
      monthDetails: getMonthDetails(year, month),
    });
  };
  const renderCalendar = () => {
    let days = getState.monthDetails.map((day: any, index: any) => {
      return (
        <div
          className={
            "c-day-container " +
            (day.month !== 0 ? " disabled" : "") +
            (isCurrentDay(day) ? " highlight" : "") +
            (isSelectedDay(day) ? " highlight-green" : "")
          }
          key={index}
        >
          <div className="cdc-day">
            <span onClick={() => onDateClick(day)}>{day.date}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="c-container">
        <div className="cc-head">
          {["PAZAR", "PTESİ", "SALI", "ÇAR", "PER", "CUMA", "CTESİ"].map((d, i) => (
            <div key={i} className="cch-name">
              {d}
            </div>
          ))}
        </div>
        <div className="cc-body">{days}</div>
      </div>
    );
  };
  return (
    <div className="MyDatePicker" ref={refDatePicker}>
      <div className="mdp-input" onClick={() => openDatePicker()}>
        <input
          type="date"
          value={props.getValue || ""}
          onChange={(event) => {
            updateDateFromInput(event);
          }}
        />
      </div>
      {showDatePicker ? (
        <div className="mdp-container">
          <div className="mdpc-head">
            <div className="mdpch-button">
              <div className="mdpchb-inner" onClick={() => setYear(-1)}>
                <span className="mdpchbi-left-arrows"></span>
              </div>
            </div>
            <div className="mdpch-button">
              <div className="mdpchb-inner" onClick={() => setMonth(-1)}>
                <span className="mdpchbi-left-arrow"></span>
              </div>
            </div>
            <div className="mdpch-container">
              <div className="mdpchc-year">{getState.year}</div>
              <div className="mdpchc-month">{getMonthStr(getState.month)}</div>
            </div>
            <div className="mdpch-button-right" onClick={() => setYear(1)}>
              <div className="mdpchb-inner-right">
                <span className="mdpchbi-right-arrows"></span>
              </div>
            </div>
            <div className="mdpch-button-right">
              <div className="mdpchb-inner-right" onClick={() => setMonth(1)}>
                <span className="mdpchbi-right-arrow"></span>
              </div>
            </div>
          </div>
          <div className="mdpc-body">{renderCalendar()}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
