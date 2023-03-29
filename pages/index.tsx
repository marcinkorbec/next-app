import {Inter} from 'next/font/google'
import {Footer} from "@/components/Footer";
import {Main} from "@/components/Main";
import {Header} from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen bg-amber-300">
      <Header/>
      <Main/>
      <Footer/>
    </div>)
}
