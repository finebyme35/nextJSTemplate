import React from "react";
interface DataType {
  bgcolor: string;
  completed: number;
}

const ProgressBar = ({ ...props }: DataType) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 20,
    width: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  
  return (
    <div style={containerStyles}>
      <div style={fillerStyles} className="text-right">
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
