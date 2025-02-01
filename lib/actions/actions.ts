const getCrochets = async () => {
  const crochets = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/crochets`)
  return crochets.json()
}

const getCrochetDetails = async (crochetId: string) => {
  const crochet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/crochets/${crochetId}`)
  return await crochet.json()
}


export {getCrochets, getCrochetDetails };

const getDrawings = async () => {
  const drawings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drawings`)
  return drawings.json()
}

const getDrawingDetails = async (crochetId: string) => {
  const drawing = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drawings/${crochetId}`)
  return await drawing.json()
}

export {getDrawings, getDrawingDetails };

const getJewelries = async () => {
  const jewelries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jewelries`)
  return jewelries.json()
}

const getJewelryDetails = async (jewelryId: string) => {
  const jewelry = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jewelries/${jewelryId}`)
  return await jewelry.json()
}


export {getJewelries, getJewelryDetails };



const getPaintings = async () => {
  const paintings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paintings`)
  return paintings.json()
}

const getPaintingDetails = async (paintingId: string) => {
  const painting = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paintings/${paintingId}`)
  return await painting.json()
}


export {getPaintings, getPaintingDetails };

const getTattoos = async () => {
  const tattoos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tattoos`)
  return tattoos.json()
}

const getTattooDetails = async (tattooId: string) => {
  const tattoo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tattoos/${tattooId}`)
  return await tattoo.json()
}


export {getTattoos, getTattooDetails };

const getWearables = async () => {
  const wearables = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wearables`)
  return wearables.json()
}

const getWearableDetails = async (wearableId: string) => {
  const wearable = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wearables/${wearableId}`)
  return await wearable.json()
}


export {getWearables, getWearableDetails };

const getWoodBurnings = async () => {
  const woodburnings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/woodburnings`)
  return woodburnings.json()
}

const getWoodBurningDetails = async (woodburningId: string) => {
  const wearable = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/woodburnings/${woodburningId}`)
  return await wearable.json()
}


export {getWoodBurnings, getWoodBurningDetails };


const getSearchedItems = async (query: string) => {
  const searchedCrochets = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/crochets/${query}`).then(res => res.json());
  const searchedDrawings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/drawings/${query}`).then(res => res.json());
  const searchedJewelries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/jewelries/${query}`).then(res => res.json());
  const searchedPaintings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/paintings/${query}`).then(res => res.json());
  const searchedTattoos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/tattoos/${query}`).then(res => res.json());
  const searchedWearables = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/wearables/${query}`).then(res => res.json());
  const searchedWoodBurnings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/woodburnings/${query}`).then(res => res.json());

  return [
    ...searchedCrochets,
    ...searchedDrawings,
    ...searchedJewelries,
    ...searchedPaintings,
    ...searchedTattoos,
    ...searchedWearables,
    ...searchedWoodBurnings,
  ];
};

export { getSearchedItems };