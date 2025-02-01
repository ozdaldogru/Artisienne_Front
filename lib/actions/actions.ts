const getCrochets = async () => {
  const crochets = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/crochets`)
  return crochets.json()
}

const getCrochetDetails = async (crochetId: string) => {
  const crochet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/crochets/${crochetId}`)
  return await crochet.json()
}

 const getSearchedCrochets = async (query: string) => {
  const searchedCrochets = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedCrochets.json()
}

export {getCrochets, getCrochetDetails, getSearchedCrochets };

const getDrawings = async () => {
  const drawings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drawings`)
  return drawings.json()
}

const getDrawingDetails = async (crochetId: string) => {
  const drawing = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drawings/${crochetId}`)
  return await drawing.json()
}

 const getSearchedDrawings = async (query: string) => {
  const searchedDrawings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedDrawings.json()
}

export {getDrawings, getDrawingDetails, getSearchedDrawings };

const getJewelries = async () => {
  const jewelries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jewelries`)
  return jewelries.json()
}

const getJewelryDetails = async (jewelryId: string) => {
  const jewelry = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jewelries/${jewelryId}`)
  return await jewelry.json()
}

 const getSearchedJewelries = async (query: string) => {
  const searchedJewelries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedJewelries.json()
}


export {getJewelries, getJewelryDetails, getSearchedJewelries };



const getPaintings = async () => {
  const paintings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paintings`)
  return paintings.json()
}

const getPaintingDetails = async (paintingId: string) => {
  const painting = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paintings/${paintingId}`)
  return await painting.json()
}

 const getSearchedPaintings = async (query: string) => {
  const searchedPaintings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedPaintings.json()
}


export {getPaintings, getPaintingDetails, getSearchedPaintings };

const getTattoos = async () => {
  const tattoos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tattoos`)
  return tattoos.json()
}

const getTattooDetails = async (tattooId: string) => {
  const tattoo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tattoos/${tattooId}`)
  return await tattoo.json()
}

 const getSearchedTattoos = async (query: string) => {
  const searchedTattoos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedTattoos.json()
}


export {getTattoos, getTattooDetails, getSearchedTattoos };

const getWearables = async () => {
  const wearables = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wearables`)
  return wearables.json()
}

const getWearableDetails = async (wearableId: string) => {
  const wearable = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wearables/${wearableId}`)
  return await wearable.json()
}

 const getSearchedWearables = async (query: string) => {
  const searchedWearables = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedWearables.json()
}


export {getWearables, getWearableDetails, getSearchedWearables };

const getWoodBurnings = async () => {
  const woodburnings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/woodburnings`)
  return woodburnings.json()
}

const getWoodBurningDetails = async (woodburningId: string) => {
  const wearable = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/woodburnings/${woodburningId}`)
  return await wearable.json()
}

 const getSearchedWoodBurnings = async (query: string) => {
  const searchedWoodBurnings = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return searchedWoodBurnings.json()
}


export {getWoodBurnings, getWoodBurningDetails, getSearchedWoodBurnings };