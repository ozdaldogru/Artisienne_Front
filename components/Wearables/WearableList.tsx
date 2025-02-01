import { getWearables } from "@/lib/actions/actions";
import WearableCard from "./WearableCard";

const WearableList = async () => {
  const wearables = await getWearables();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Wearable Inventory</h1> 
 
      {!wearables || wearables.length === 0 ? (
        <p className="text-body-bold">No wearables found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {wearables.map((wearable: WearableType) => (
            <WearableCard key={wearable._id} wearable={wearable}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default WearableList;
