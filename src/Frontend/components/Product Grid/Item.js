import React from "react";
import Card from "@mui/material/Card";
import "./Item.css";

const Item = ({ text }) => {
  return <Card className="card">{text}</Card>;
};

export default Item;
