"use client";
import HTMLReactParser from "html-react-parser";


const WoodBurningDescription = ({ woodburningInfo }: { woodburningInfo: WoodBurningType }) => {


  return (

    <div className="text-[20px] max-[431px]:text-[15px] flex flex-col w-full items-center gap-2 border-b">

      <div>{HTMLReactParser(woodburningInfo.description)}</div>
      
    </div>  
  );
};

export default WoodBurningDescription;
