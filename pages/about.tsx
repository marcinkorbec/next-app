import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

interface Props {

}

const AboutPage = ({}) => {
  return (
    <>
      <div className="container mx-auto flex flex-col min-h-screen bg-amber-100">
        <Header/>
        <div>Cześć Marcinku!</div>
        <Footer/>
      </div>
    </>

  )
}

export default AboutPage;