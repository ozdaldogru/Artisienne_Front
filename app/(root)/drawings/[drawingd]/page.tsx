import * as React from "react";
import DrawingGallery from "@/components/Drawings/DrawingGallery";
import { getDrawingDetails } from "@/lib/actions/actions";
import DrawingTitle from "@/components/Drawings/DrawingTitle";
import DrawingDescription from "@/components/Drawings/DrawingDescription";

interface DrawingCardProps {
  drawing: DrawingType;
}

const DrawingDetails = async ({ params }: { params: { drawingId: string } }) => {
  const drawingDetails = await getDrawingDetails(params.drawingId);

  return (
    <>
      <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
          <DrawingTitle drawingInfo={drawingDetails} />
        </div>

        <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
          <DrawingGallery drawingMedia={drawingDetails.media} />
          <br />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">
              Description
            </h2>
            <DrawingDescription drawingInfo={drawingDetails} />
          </div>

          <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
            <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">
              ${drawingDetails.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default DrawingDetails;