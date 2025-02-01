"use client";

import PaintingTitle  from "./PaintingTitle";
import PaintingDescription  from "./PaintingDescription";


const PaintingInfo = ({ paintingInfo }: { paintingInfo: PaintingType }) => {


  return (

<div >
<div><PaintingTitle paintingInfo={paintingInfo}/></div>
<div><PaintingDescription paintingInfo={paintingInfo}/></div>



</div>  
  );
};

export default PaintingInfo;
