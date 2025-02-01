"use client";

import WoodBurningTitle  from "./WoodBurningTitle";
import WoodBurningDescription  from "./WoodBurningDescription";


const WoodBurningInfo = ({ woodburningInfo }: { woodburningInfo: WoodBurningType }) => {


  return (

<div >
<div><WoodBurningTitle woodburningInfo={woodburningInfo}/></div>
<div><WoodBurningDescription woodburningInfo={woodburningInfo}/></div>



</div>  
  );
};

export default WoodBurningInfo;
