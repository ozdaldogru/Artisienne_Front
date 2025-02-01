"use client";

import CrochetTitle  from "./CrochetTitle";
import CrochetDescription  from "./CrochetDescription";


const CrochetInfo = ({ crochetInfo }: { crochetInfo: CrochetType }) => {


  return (

<div >
<div><CrochetTitle crochetInfo={crochetInfo}/></div>
<div><CrochetDescription crochetInfo={crochetInfo}/></div>



</div>  
  );
};

export default CrochetInfo;
