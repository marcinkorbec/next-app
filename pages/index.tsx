import {Inter} from 'next/font/google'
import {Footer} from "@/components/Footer";
import {Main} from "@/components/Main";
import {Header} from "@/components/Header";

const inter = Inter({subsets: ['latin']})

const DATA = {
  description: `Napędzany najnowszej generacji silnikiem Bonneville o wysokim momencie obrotowym i poj. 900 cm³, zaktualizowanym
na rok 2021, z jego unikatowym charakterem, wyróżniającym się brzmieniem, czystą customową stylistyką i
łatwością prowadzenia sprawia, że jazda nim jest po prostu wciągająca. Speed Twin 900 ma genialny styl i jest
wygodny, dzięki czemu jest idealnym Bonneville'em dla współczesnego motocyklisty. Model ten jest najbardziej
popularnym klasycznym customowym motocyklem marki Triumph, a wraz z premierą udoskonalonego Speed Twina 900
sprawdzamy, dlaczego ten kultowy, nowoczesny motocykl jest tak lubiany oraz jakie funkcje na 2021 rok sprawiają,
  że będzie on najlepszą generacją w historii.
  Quasi, sequi ut.`,
  thumbnailUrl: 'https://www.jednoslad.pl/wp-content/uploads/2021/02/Triumph-Speed-Twin.jpeg',
  thumbnailAlt: 'triumph twin speed',
}

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen bg-amber-300">
      <Header/>
      <Main
        data={DATA}
      />
      <Footer/>
    </div>)
}
