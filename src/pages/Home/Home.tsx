import AboutUs from "../../components/Home/AboutUs";
import CategorySlider from "../../components/Home/CategorySlider";
import Discount from "../../components/Home/Discount";
import Hero from "../../components/Home/Hero";
import MostPopular from "../../components/Home/MostPopular";
import ProuctFurnitures from "../../components/Home/ProuctFurnitures";
import './Home.css'

const Home = () => {
    return (
      <>
        <Hero />
        <CategorySlider />
        <AboutUs/>
        <Discount />
        <ProuctFurnitures />
        <MostPopular />
      </>
    )
}

export default Home