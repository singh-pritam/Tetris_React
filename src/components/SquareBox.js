import React from "react";
import { StyledSquareBox } from "./styles/StyledSquareBox";

function SquareBox(props) {
  return (
    <StyledSquareBox color={props.color}>{console.log("box")}</StyledSquareBox>
  );
}

export default React.memo(SquareBox);
