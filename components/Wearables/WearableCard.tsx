"use client";

import Link from "next/link";
import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion"
import { useEffect, useRef } from "react"

interface WearableCardProps {
  wearable: WearableType;
}

const WearableCard = ({ wearable }: WearableCardProps ) => {
  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimation()



  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <>
          <section ref={containerRef}>
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.5 }}
        >


  <Link
      href={`/wearables/${wearable._id}`}
      className="w-[400px] max-[431px]:w-[360px] flex flex-col bg-[#F5F5F5] border border-[#8F95A0] shadow-lg hover:shadow-2xl rounded-md "
    >
            <div
              className="w-full h-[300px] max-[431px]:h-[200px] bg-center bg-cover relative rounded-md"
              style={{ backgroundImage: `url(${wearable.media[0]})` }}
            >

              <span className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center text-[30px] max-[431px]:text-[20px] rounded-md">
                      {wearable.status === "Pending" ? (
                  
                        <p className="text-orange-500 text-bold " >{wearable.status}</p>
               
                      ) : (
                      
                        wearable.status === "Archived"  ? (
                        
                            <p className="text-blue-500 text-bold" >{wearable.status}</p>
                       
                  ) : (
                      
                    wearable.status === "Sold Out"  ? (
                      
                          <p className="text-red-500 text-bold" >{wearable.status}</p>
                    
                ) :
                (
                     <p className="text-green-500 text-bold" >{wearable.status}</p>
                 )))
                }
              </span>

		    	</div>

    
      


      <div className="flex flex-col  w-full border-b border-[#8F95A0]">


        <div className="flex flex-row w-full items-center py-2 max-[431px]:flex-row max-[431px]:flex-col max-[431px]:items-start px-4">

        <p className="text-body-bold text-[#8F95A0] max-[431px]:text-[15px]">${wearable.price.toLocaleString()}</p>

        </div>

       </div>


    </Link>

    
        </motion.h1>

      </section>
    </>
  );
};



export default WearableCard;
