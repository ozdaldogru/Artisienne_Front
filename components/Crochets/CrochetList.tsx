import { getCrochets } from "@/lib/actions/actions";
import CrochetCard from "./CrochetCard";

const CrochetList = async () => {
  const crochets = await getCrochets();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
          <h1 className="text-heading1-bold border-b-[3px] border-black max-[431px]:text-[20px]">Crochet Inventory</h1> 
 
      {!crochets || crochets.length === 0 ? (
        <p className="text-body-bold">No crochets found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {crochets.map((crochet: CrochetType) => (
            <CrochetCard key={crochet._id} crochet={crochet}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrochetList;
