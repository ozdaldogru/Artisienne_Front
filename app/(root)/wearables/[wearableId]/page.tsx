import * as React from "react";
import WearableGallery from "@/components/Wearables/WearableGallery";
import { getWearableDetails } from "@/lib/actions/actions";
import WearableTitle from "@/components/Wearables/WearableTitle";
import WearableDescription from "@/components/Wearables/WearableDescription";

interface WearableCardProps {
  wearable: WearableType;
}

const WearableDetails = async ({ params }: { params: Promise<{ wearableId: string }> }) => {
  const { wearableId } = await params;
  const wearableDetails = await getWearableDetails(wearableId);

  return (
    <>
      <div className="flex flex-wrap items-center flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
          <WearableTitle wearableInfo={wearableDetails} />
        </div>

        <div className="max-w-[1290px] w-full h-full flex flex-col gap-2">
          <WearableGallery wearableMedia={wearableDetails.media} />
          <br />

          <div className="text-center flex flex-col gap-2">
            <h2 className="text-[35px] max-[431px]:text-[20px] text-bold text-center py-2 border-b-2 border-[#E5E5E5] py-5">
              Description
            </h2>
            <WearableDescription wearableInfo={wearableDetails} />
          </div>

          <div className="flex justify-center md:gap-2 text-[24px] max-[431px]:text-[20px]">
            <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">
              ${wearableDetails.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default WearableDetails;