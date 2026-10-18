import Card from "./Card";

export default function GridCrads({ itemsList }) {

  return (
    <>
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
        {itemsList?.map(item =>
          <div key={item.id} className="col">
            <Card item={item} />
          </div>
        )}
      </div>
    </>
  )
}