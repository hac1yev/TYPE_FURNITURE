import shop_icon from '../../assets/images/Header/shopping-icon.svg';

const Discount = () => {
    return (
        <div className="discount-section">
            <h1>20% DISCOUNT</h1>
            <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                eligendi optio cumque nihil impedit quo 
            </p>
            <button>
                <img src={shop_icon} alt="shopping-icon" />
                SHOP NOW
            </button>
        </div>
    );
};

export default Discount;