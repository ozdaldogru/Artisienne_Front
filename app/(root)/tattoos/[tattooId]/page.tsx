import * as React from "react";
import TattooGallery from "@/components/Tattoos/TattooGallery";
import { getTattooDetails } from "@/lib/actions/actions";
import TattooTitle from "@/components/Tattoos/TattooTitle";
import TattooDescription from "@/components/Tattoos/TattooDescription";

interface TattooCardProps {
  tattoo: TattooType;
}

const TattooDetails = async ({ params }: { params: Promise<{ tattooId: string }> }) => {
  const { tattooId } = await params;
  const tattooDetails = await getTattooDetails(tattooId);

  return (
    <>
      <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
          <TattooTitle tattooInfo={tattooDetails} />
        </div>

        <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
          <TattooGallery tattooMedia={tattooDetails.media} />
          <br />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">
              Description
            </h2>
            <TattooDescription tattooInfo={tattooDetails} />
          </div>

          <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
            <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">
              ${tattooDetails.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default TattooDetails;