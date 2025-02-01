"use client";
import HTMLReactParser from "html-react-parser";


const CrochetDescription = ({ crochetInfo }: { crochetInfo: CrochetType }) => {


  return (

    <div className="text-[20px] max-[431px]:text-[15px] flex flex-col w-full items-center gap-2 border-b">

      <div>{HTMLReactParser(crochetInfo.description)}</div>
      
    </div>  
  );
};

export default CrochetDescription;
