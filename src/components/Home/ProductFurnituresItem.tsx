import heart from '../../assets/images/Heart.svg';
import { ProductFurnitureItemProps } from '../../assets/types/home-page-types';

const ProductFurnituresItem: React.FC<ProductFurnitureItemProps> = ({ title,img,price }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 mt-5 product-furniture-col">
            <div className='product-furniture-img'> 
                <img src={img} alt="" />
                <div className='card-heart-img'>
                    <img src={heart} alt="heart" />
                </div>
            </div>
            <p>{title}</p>
            <span>{price}</span>
        </div>
    );
};

export default ProductFurnituresItem;