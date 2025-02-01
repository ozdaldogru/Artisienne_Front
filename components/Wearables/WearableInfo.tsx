"use client";

import WearableTitle  from "./WearableTitle";
import WearableDescription  from "./WearableDescription";


const WearableInfo = ({ wearableInfo }: { wearableInfo: WearableType }) => {


  return (

<div >
<div><WearableTitle wearableInfo={wearableInfo}/></div>
<div><WearableDescription wearableInfo={wearableInfo}/></div>



</div>  
  );
};

export default WearableInfo;
