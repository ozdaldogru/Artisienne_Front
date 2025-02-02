import Slider from "@/components/Slider";
import CrochetList from "@/components/Crochets/CrochetList";



export default function Home() {
  return (
    <>
      <div>
        <div className="w-full">
          <Slider />
        </div>

        
        <div className="items-center justify-center flex flex-row flex-wrap text-[50px]" > Categories</div>
        <div className="items-center justify-center text-center flex flex-row flex-wrap text-[20px] gap-8" >

              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Crochets</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Drawings</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Jewelries</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Paintings</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Tattoos</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Wearables</button></a>
              </div>
              <div className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md " >
                <a href="/crochets" target="blank"><button>Wood Burnings</button></a>
              </div>
          
        </div>




        <div className="items-center justify-center grid grid-col-3 text-[50px]" >
          <h1>Recently Added</h1>
        </div>

        <CrochetList />
        
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

