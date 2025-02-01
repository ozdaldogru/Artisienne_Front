import { getPaintings } from "@/lib/actions/actions";
import PaintingCard from "./PaintingCard";

const PaintingList = async () => {
  const paintings = await getPaintings();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Painting Inventory</h1> 
 
      {!paintings || paintings.length === 0 ? (
        <p className="text-body-bold">No paintings found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {paintings.map((painting: PaintingType) => (
            <PaintingCard key={painting._id} painting={painting}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaintingList;
