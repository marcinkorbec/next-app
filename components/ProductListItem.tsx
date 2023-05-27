interface ProductDetails {
  title: string;
  thumbnailUrl: string;
  // description: string;
  thumbnailAlt: string;
  // rating: number;
}

type ProductListItemType = Pick<ProductDetails, "title">



interface ProductProps {
  data: ProductDetails;
}

export const ProductListItem = ({data}: ProductProps) => {
  return (
    <>
      <img className='p-4' src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <h2 className='p-4 text-3xl font-bold'>{data.title}</h2>
      {/*<p className="p-4">{data.description}</p>*/}
      {/*<p className='p-4 text-sky-500	font-bold'>{data.rating}</p>*/}
    </>
  )
}