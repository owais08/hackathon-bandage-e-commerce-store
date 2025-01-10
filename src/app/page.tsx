import Header from "./components/header";
import Hero from "./components/hero";
import PromoProduct from "./components/prormoProduct";
import Article from "./components/article";
import Posts from "./components/post";
import Footer from "./components/footer";
import EditorsPick from "./components/editorsPick";
import FeaturedProducts from "./components/featuredProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <EditorsPick />
      <FeaturedProducts />
      <PromoProduct />
      <Article />
      <Posts />
      <Footer />
    </div>
  );
}
