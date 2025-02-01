"use client";

import JewelryTitle  from "./JewelryTitle";
import JewelryDescription  from "./JewelryDescription";


const JewelryInfo = ({ jewelryInfo }: { jewelryInfo: JewelryType }) => {


  return (

<div >
<div><JewelryTitle jewelryInfo={jewelryInfo}/></div>
<div><JewelryDescription jewelryInfo={jewelryInfo}/></div>



</div>  
  );
};

export default JewelryInfo;
