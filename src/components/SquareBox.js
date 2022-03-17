import React from "react";
// import "./SquareBox.css";
import { Tetrominos } from "../Tetrominos";
import { StyledSquareBox } from "./styles/StyledSquareBox";

function SquareBox(props) {
  return <StyledSquareBox color={props.color}></StyledSquareBox>;
}

export default SquareBox;
