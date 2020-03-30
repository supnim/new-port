import React from "react";
import MethCard from "src/components/methData.js";
import methData from "../components/methData";

// const Meth = ({ data }) => {
// const cardInfo = methData.map(info => (
//   <MethCard title={meth.title} standfirst={meth.standfirst} id={meth.id} />
// ))
function Meth() {
  return (
    <div className="meth-body">
      <MethCard title="Nimesh" standfirst="here is some stand first" />
      {cardInfo}
      <h1>Meth</h1>
    </div>
  );
}

export default Meth;
