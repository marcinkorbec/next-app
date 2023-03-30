interface Props {
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
}

export const Main = ({description, thumbnailAlt, thumbnailUrl }:Props) => {
  console.log(description)
  return (
    <main className="flex-grow bg-amber-50 grid sm:grid-cols-2">
      <img src={thumbnailUrl} alt={thumbnailAlt}/>
      <p className="p-10">{description}</p>
    </main>
  )
}