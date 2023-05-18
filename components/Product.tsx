import Image from "next/image";

interface Props {
  data: {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  }
}

export const Product = ({data}: Props) => {
  return (
    <>
      <Image className='p-4' src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <h2 className='p-4 text-3xl font-bold'>{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <p className='p-4 text-sky-500	font-bold'>{data.rating}</p>
    </>
  )
}