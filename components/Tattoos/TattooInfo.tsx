"use client";

import TattooTitle  from "./TattooTitle";
import TattooDescription  from "./TattooDescription";


const TattooInfo = ({ tattooInfo }: { tattooInfo: TattooType }) => {


  return (

<div >
<div><TattooTitle tattooInfo={tattooInfo}/></div>
<div><TattooDescription tattooInfo={tattooInfo}/></div>



</div>  
  );
};

export default TattooInfo;
