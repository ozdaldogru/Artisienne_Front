import * as React from "react";
import JewelryGallery from "@/components/Jewelries/JewelryGallery";
import { getJewelryDetails } from "@/lib/actions/actions";
import JewelryTitle from "@/components/Jewelries/JewelryTitle";
import JewelryDescription from "@/components/Jewelries/JewelryDescription";

interface JewelryCardProps {
  jewelry: JewelryType;
}

const JewelryDetails = async ({ params }: { params: { jewelryId: string } }) => {
  const jewelryDetails = await getJewelryDetails(params.jewelryId);

  return (
    <>
      <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
          <JewelryTitle jewelryInfo={jewelryDetails} />
        </div>

        <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
          <JewelryGallery jewelryMedia={jewelryDetails.media} />
          <br />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">
              Description
            </h2>
            <JewelryDescription jewelryInfo={jewelryDetails} />
          </div>

          <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
            <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">
              ${jewelryDetails.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default JewelryDetails;