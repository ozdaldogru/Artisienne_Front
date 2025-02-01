import PaintingList from "@/components/Paintings/PaintingList";

export default function Home() {
  return (
    <>
      <div >
      <PaintingList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
