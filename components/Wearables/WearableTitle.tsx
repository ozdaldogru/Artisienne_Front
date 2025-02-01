"use client";

const WearableTitle = ({ wearableInfo }: { wearableInfo: WearableType }) => {


  return (

<div>

  <div className="w-full text-[45px] mt-10 gap-16 max-[431px]:text-[30px]">

 
        <h1>{wearableInfo.title}</h1>
 

  </div>


</div>  
  );
};

export default WearableTitle;
