import DrawingList from "@/components/Drawings/DrawingList";



export default function Home() {
  return (
    <>
      <div >
      <DrawingList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
