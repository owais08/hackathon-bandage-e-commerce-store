import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import EditorsPick from "./components/EditorsPick";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import Cards from "./components/cards";

// import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Hero /> */}
      <Carousel />

      <Cards/>

      {/* <EditorsPick /> */}
      {/* <FeaturedProducts /> */}
      {/* <Footer /> */}
    </div>
  );
}
