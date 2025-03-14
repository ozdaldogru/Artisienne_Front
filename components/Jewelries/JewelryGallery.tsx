"use client"

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {Fullscreen,Thumbnails, Zoom} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';


const JewelryGallery = ({ jewelryMedia }: { jewelryMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(jewelryMedia[0]);
  const [index, setIndex] = useState<number>(-1);
  return (
    <div className="flex flex-col gap-3 w-1280">
      <div className="flex justify-center w-1280 max-h-[720px]">

      <Lightbox
      open={index >= 0}
      close={() => setIndex(-1)}
      slides={jewelryMedia.map((image) => ({ src: image }))}
      plugins={[Fullscreen, Zoom, Thumbnails]}
      captions={{
        showToggle: true,
        descriptionTextAlign: 'end',
      }}
      />
      <Image
        src={mainImage}
        width={1280}
        height={720}
        alt="product image"
        className="w-1280 h-720 rounded-lg cursor-pointer shadow-xl object-cover"
        onClick={() => setIndex(0)} 
      />
      </div>

    <div className="flex flex-wrap gap-2 justify-center overflow-auto tailwind-scrollbar-hide">

    {jewelryMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={40}
            width={40}
            alt="product"
            className="cursor-pointer w-36 h-24 rounded-md"
            onClick={() => setMainImage(image)}
          />
        ))}

      </div>
    </div>
  );
};

export default JewelryGallery;
