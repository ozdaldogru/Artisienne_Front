import { getTattoos } from "@/lib/actions/actions";
import TattooCard from "./TattooCard";

const TattooList = async () => {
  const tattoos = await getTattoos();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Tattoo Inventory</h1> 
 
      {!tattoos || tattoos.length === 0 ? (
        <p className="text-body-bold">No tattoos found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {tattoos.map((tattoo: TattooType) => (
            <TattooCard key={tattoo._id} tattoo={tattoo}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default TattooList;
