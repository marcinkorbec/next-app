import {ReactNode} from "react";

interface Props {
  children: ReactNode
}

export const Main = ({children}: Props) => {
  console.log()
  return (
    <main className="flex-grow bg-amber-50 grid sm:grid-cols-2">
      {children}
    </main>
  )
}