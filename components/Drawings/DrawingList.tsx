import { getDrawings } from "@/lib/actions/actions";
import DrawingCard from "./DrawingCard";

const DrawingList = async () => {
  const drawings = await getDrawings();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Drawing Inventory</h1> 
 
      {!drawings || drawings.length === 0 ? (
        <p className="text-body-bold">No drawings found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {drawings.map((drawing: DrawingType) => (
            <DrawingCard key={drawing._id} drawing={drawing}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default DrawingList;
