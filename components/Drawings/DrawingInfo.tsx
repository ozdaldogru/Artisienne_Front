"use client";

import DrawingTitle  from "./DrawingTitle";
import DrawingDescription  from "./DrawingDescription";


const DrawingInfo = ({ drawingInfo }: { drawingInfo: DrawingType }) => {


  return (

<div >
<div><DrawingTitle drawingInfo={drawingInfo}/></div>
<div><DrawingDescription drawingInfo={drawingInfo}/></div>



</div>  
  );
};

export default DrawingInfo;
