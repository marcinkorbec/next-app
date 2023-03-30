interface Props {
  data: {
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
  }
}

export const Main = ({data}: Props) => {
  console.log()
  return (
    <main className="flex-grow bg-amber-50 grid sm:grid-cols-2">
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
      <p className="p-10">{data.description}</p>
    </main>
  )
}