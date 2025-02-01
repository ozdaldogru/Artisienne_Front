import { getSearchedItems } from "@/lib/actions/actions"

const SearchPage = async (props: { params: Promise<{ query: string }>}) => {
  const params = await props.params;
  const searchedItems = await getSearchedItems(params.query)
  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Search results for {decodedQuery}</p>
      {!searchedItems || searchedItems.length === 0 ? (
        <p className="text-body-bold my-5">No result found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 ">
          {searchedItems.map((item: any) => (
            <div key={item._id} className="item-card">
              {/* Render item details here */}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage;