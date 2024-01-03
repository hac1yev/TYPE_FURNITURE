import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { categorySliderApi } from "../../assets/apis/categorySlider-api";

function CategorySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <FaArrowLeft />,
        nextArrow: <FaArrowRight />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                navigation: false
              }
            }
          ]
    };

    return (
        <>
            <Slider {...settings} className="category-slider">
                {categorySliderApi.map((item) => (
                    <div className="furniture-slider-card" key={item.id}>
                        <div className="furniture-slider-blur">
                            <p>{item.title}</p>
                        </div>
                        <img src={item.img} alt="furniture1" />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default CategorySlider