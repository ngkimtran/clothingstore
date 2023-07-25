import Slider from "../../components/Slider/Slider";
import HighlightProducts from "../../components/HighlightProducts/HighlightProducts";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import Contact from "../../components/Contact/Contact";
import "./Home.scss";
import { ProductType } from "../../types/DataTypes";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <HighlightProducts type={ProductType.featured} />
      <CategoriesList />
      <HighlightProducts type={ProductType.trending} />
      <Contact />
    </div>
  );
};

export default Home;
