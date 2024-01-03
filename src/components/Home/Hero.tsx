import blur_hero from '../../assets/images/Hero/blur_hero.png';
import no_blur_hero from '../../assets/images/Hero/no_blur_hero.svg';
import shop_icon from '../../assets/images/Header/shopping-icon.svg';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [imgChange,setImgChange] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 992) {
            setImgChange(true);
        }else{
            setImgChange(false)
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 992) {
                setImgChange(true);
            }else{
                setImgChange(false)
            }
        });
    }, [imgChange]);

    return (
        <div className='hero-section'>
            <div className="row mx-0">
                <div className="col-lg-4 hero-content-col">
                    <div className='hero-content'>
                        <h1>THE FURNITURE THAT DEFINES YOU</h1>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                            praesentium voluptatum
                        </p>
                        <button>
                            <img src={shop_icon} alt="shopping-icon" />
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="col-lg-8 hero-img-col">
                    <img src={!imgChange ? blur_hero : no_blur_hero} alt="blur_hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;