interface Props {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  }
}

export const Product = ({data}: Props) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <p className="p-10">{data.description}</p>
      <p>{data.rating}</p>
    </>
  )
}