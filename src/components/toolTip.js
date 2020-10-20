import React from "react";
import styled from "styled-components";
const ToolTipText = styled("span")({
  visibility: "hidden",
  fontSize: "14px",
  width: "400px",
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
  borderRadius: "4px",
  padding: "8px",
  position: "absolute",
  zIndex: 1,
  bottom: "150%",
  left: "-950%",
  ":after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-5px"
  }
});

const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "1px dotted black",
  ":hover span": {
    visibility: "visible"
  }
});

const Tooltip = ({ children, toolTipText }) => (
  <ToolTip>
    {children}
    <ToolTipText>{toolTipText}</ToolTipText>
  </ToolTip>
);

export default Tooltip;
