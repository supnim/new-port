import React, { useState } from "react";
import "../utils/css/components/meth.scss";
import MethCard from "../components/methCard";
import Data from "../components/methData";
import { motion } from "framer-motion";

import {
  FaBraille,
  FaBicycle,
  FaEye,
  FaObjectGroup,
  FaFile,
  FaCubes,
  FaFileAlt,
  FaSyncAlt
} from "react-icons/fa";

const defaultBackground = "default background";

function MethodologyBoard() {
  const [currentCard, setCurrentCard] = useState(defaultBackground);

  return (
    <div id="board" className="board">
      <h2 className="methHeader">methodology.</h2>
      <div>{currentCard}</div>
      <motion.div className="methContainer" id="methContainer">
        {Data.length &&
          Data.map(({ title, standfirst, icon, background }) => {
            return (
              <div
                onMouseOver={() => setCurrentCard(background)}
                onMouseLeave={() => setCurrentCard(defaultBackground)}
              >
                <MethCard icon={icon} title={title} standfirst={standfirst} />
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default MethodologyBoard;
