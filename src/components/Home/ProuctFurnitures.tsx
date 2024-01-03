import { productsApi } from "../../assets/apis/products-api";
import ProductFurnituresItem from "./ProductFurnituresItem";

const ProuctFurnitures = () => {
    return (
        <div className="product-furniture">
            <div className="row m-0">
                <h1 className="mt-5 mb-0">PRODUCTS</h1>
                {productsApi.map((item) => (
                    <ProductFurnituresItem key={item.id} {...item} />
                ))}  
            </div>  
        </div>
    );
};

export default ProuctFurnitures;