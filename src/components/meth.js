import React from "react";
import "../utils/css/components/meth.scss";
import MethCard from "../components/methCard";

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

function MethologyBoard() {
  return (
    <div id="board" className="board">
      <h2 className="methHeader">methology.</h2>
      <div className="methContainer" id="methContainer">
        <div id="design" f er24 frf vrf>
          <MethCard
            icon={<FaEye className="icon" />}
            title="understand"
            standfirst="find out goals  and strategy, collect information, ask questions"
          />
        </div>
        <MethCard
          icon={<FaBicycle className="icon" />}
          title="explore"
          standfirst="envision, hypothesise and ideate, develop lots of solutions with all parts of business"
        />
        <MethCard
          icon={<FaBraille className="icon" />}
          title="plan"
          standfirst="choose the best, wirefrime idea and project the products coming journey"
        />
        <MethCard
          icon={<FaObjectGroup className="icon" />}
          title="design"
          standfirst="bring ideas to life, prototype, focusing on usability and experiment"
        />
        <MethCard
          icon={<FaFile className="icon" />}
          title="test"
          standfirst="show prototypes to users outside of co. learn what doesn’t work "
        />
        <MethCard
          icon={<FaCubes className="icon" />}
          title="develop"
          standfirst="break-down and organise to build MVP (Minimum Viable Product)"
        />
        <MethCard
          icon={<FaFileAlt className="icon" />}
          title="test again"
          standfirst="use data, understand behaviours, A/B test, new ideas and start V2"
        />
        <MethCard
          icon={<FaSyncAlt className="icon" />}
          title="loop"
          standfirst="fairly simple, start gain. new goals new needs a never ending cycle of iteration"
        />
      </div>
    </div>
  );
}
export default MethologyBoard;

//attempt 1

// function Meth({ data }) {
//   return (
//     <div className="meth-body">
//       <MethCard title={data.title} standfirst={data.standfirst} />
//       {cardInfo}
//       <h1>Meth</h1>
//     </div>
//   )
// }

// attempt 2

// class Meth extends Component {
//   render() {
//     const data = {
//       title: "React",
//       standfirst: "Your component library for ..."
//     }
//     return (
//       <div>
//         <Meth title={data.title} standfirst={data.standfirst} />
//       </div>
//     )
//   }
// }
