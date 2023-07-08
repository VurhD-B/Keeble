import React from "react";

const MenuItem = ({ children, label }) => {
  return (
    <div className="flex flex-row ml-2 mt-2">
      <div className="mr-2">{children}</div>
      <div>{label}</div>
    </div>
  );
};

export default MenuItem;
