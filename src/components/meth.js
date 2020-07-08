import React, { useState } from "react";
import "../utils/css/components/meth.scss";
import MethodologyCard from "../components/methCard";
import MethodologyData from "../components/methData";
import { motion } from "framer-motion";

const defaultBackground = "default background";

function MethodologyBoard() {
  const [currentCard, setCurrentCard] = useState(defaultBackground);
  const focusStyle = {
    outline: "solid 2px pink"
  };
  return (
    <div id="board" className="board">
      <h2 className="methHeader">methodology.</h2>
      <div>{currentCard}</div>
      <motion.div className="methContainer" id="methContainer">
        {MethodologyData.length &&
          MethodologyData.map(({ title, standfirst, icon, background }) => {
            return (
              <div
                onMouseOver={() => setCurrentCard(background)}
                onFocus={focusStyle}
                onMouseLeave={() => setCurrentCard(defaultBackground)}
              >
                <MethodologyCard
                  icon={icon}
                  title={title}
                  standfirst={standfirst}
                />
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default MethodologyBoard;
