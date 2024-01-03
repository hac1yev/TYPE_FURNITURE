import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { productsApi } from '../../assets/apis/products-api';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import heart from '../../assets/images/heart.svg';

const MostPopular = () => {
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
            <h1 className='px-4 mt-5 mb-0'>MOST POPULAR</h1>
            <Slider {...settings} className="category-slider py-0">
                {productsApi.map((item) => (
                    <div className="mt-5 product-furniture-col">
                        <div className='product-furniture-img'> 
                            <img src={item.img} alt="" />
                            <div className='card-heart-img'>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <span>{item.price}</span>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default MostPopular