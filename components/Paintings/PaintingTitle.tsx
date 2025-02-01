"use client";

const PaintingTitle = ({ paintingInfo }: { paintingInfo: PaintingType }) => {


  return (

<div>

  <div className="w-full text-[45px] mt-10 gap-16 max-[431px]:text-[30px]">

 
        <h1>{paintingInfo.title}</h1>
 

  </div>


</div>  
  );
};

export default PaintingTitle;
