import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import React from "react";
import {Main} from "@/components/Main";
import { Container } from "@/components/Container";

const Blog = () => {
  return (
    <Container>
      <Header/>
      <Main>
        <div>Blog</div>
      </Main>
      <Footer/>
    </Container>

  )
}
export default Blog;