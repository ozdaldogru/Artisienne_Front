import { getWoodBurnings } from "@/lib/actions/actions";
import WoodBurningCard from "./WoodBurningCard";

const WoodBurningList = async () => {
  const woodburnings = await getWoodBurnings();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">WoodBurning Inventory</h1> 
 
      {!woodburnings || woodburnings.length === 0 ? (
        <p className="text-body-bold">No woodburnings found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {woodburnings.map((woodburning: WoodBurningType) => (
            <WoodBurningCard key={woodburning._id} woodburning={woodburning}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default WoodBurningList;
