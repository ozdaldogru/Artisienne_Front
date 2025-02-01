"use client";
import HTMLReactParser from "html-react-parser";


const DrawingDescription = ({ drawingInfo }: { drawingInfo: DrawingType }) => {


  return (

    <div className="text-[20px] max-[431px]:text-[15px] flex flex-col w-full items-center gap-2 border-b">

      <div>{HTMLReactParser(drawingInfo.description)}</div>
      
    </div>  
  );
};

export default DrawingDescription;
