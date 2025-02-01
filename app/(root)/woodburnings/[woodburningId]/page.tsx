import * as React from "react";
import WoodBurningGallery from "@/components/WoodBurnings/WoodBurningGallery";
import { getWoodBurningDetails } from "@/lib/actions/actions";
import WoodBurningTitle from "@/components/WoodBurnings/WoodBurningTitle";
import WoodBurningDescription from "@/components/WoodBurnings/WoodBurningDescription";

interface WoodBurningCardProps {
  woodburning: WoodBurningType;
}

const WoodBurningDetails = async ({ params }: { params: { woodburningId: string } }) => {
  const woodburningDetails = await getWoodBurningDetails(params.woodburningId);

  return (
    <>
      <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
          <WoodBurningTitle woodburningInfo={woodburningDetails} />
        </div>

        <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
          <WoodBurningGallery woodburningMedia={woodburningDetails.media} />
          <br />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">
              Description
            </h2>
            <WoodBurningDescription woodburningInfo={woodburningDetails} />
          </div>

          <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
            <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">
              ${woodburningDetails.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default WoodBurningDetails;