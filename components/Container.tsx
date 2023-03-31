import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({children}: Props) => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen bg-amber-300">
      {children}
    </div>
  )
}