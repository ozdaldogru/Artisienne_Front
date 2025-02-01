import TattooList from "@/components/Tattoos/TattooList";

export default function Home() {
  return (
    <>
      <div >
      <TattooList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
