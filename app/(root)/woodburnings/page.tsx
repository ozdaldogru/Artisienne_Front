import WoodBurningList from "@/components/WoodBurnings/WoodBurningList";


export default function Home() {
  return (
    <>
      <div >
      <WoodBurningList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
