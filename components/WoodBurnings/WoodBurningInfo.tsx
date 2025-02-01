"use client";

import WoodBurningTitle  from "./WoodBurningTitle";
import WoodBurningDescription  from "./WoodBurningDescription";


const WoodBurningInfo = ({ woddburningInfo }: { woddburningInfo: WoodBurningType }) => {


  return (

<div >
<div><WoodBurningTitle woddburningInfo={woddburningInfo}/></div>
<div><WoodBurningDescription woddburningInfo={woddburningInfo}/></div>



</div>  
  );
};

export default WoodBurningInfo;
