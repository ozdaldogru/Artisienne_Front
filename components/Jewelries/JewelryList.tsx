import { getJewelries } from "@/lib/actions/actions";
import JewelryCard from "./JewelryCard";

const JewelryList = async () => {
  const jewelries = await getJewelries();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Jewelry Inventory</h1> 
 
      {!jewelries || jewelries.length === 0 ? (
        <p className="text-body-bold">No jewelries found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {jewelries.map((jewelry: JewelryType) => (
            <JewelryCard key={jewelry._id} jewelry={jewelry}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default JewelryList;
