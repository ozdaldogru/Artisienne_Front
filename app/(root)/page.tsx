import Slider from "@/components/Slider";
import CrochetList from "@/components/Crochets/CrochetList";



export default function Home() {
  return (
    <>
      <div>
        <div className="w-full">
          <Slider />
        </div>

        <div className="items-center justify-center grid grid-col-3 text-[50px]" >
          <h1>Recently Added</h1>
        </div>
        <div className="flex flew-wrap flex-row gap-4 justify-center object-fill border-b-2">
          <button><a href="/crochets" target="blank">Crochets</a></button>
          <button><a href="/drawings" target="blank"></a>Drawings</button>
          <button><a href="/jewelries" target="blank"></a>Jewelries</button>
          <button><a href="/paintings" target="blank">Paintings</a></button>
          <button><a href="/tattoos" target="blank">Tattoos</a></button>
          <button><a href="/wearables" target="blank">Wearables</a></button>
          <button><a href="/woodburnings" target="blank">Wood Burnings</a></button>

        </div>
        <CrochetList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

