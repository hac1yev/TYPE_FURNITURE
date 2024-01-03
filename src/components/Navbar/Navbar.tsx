import { Link } from 'react-router-dom';
import './Navbar.css';
import search from '../../assets/images/Header/search.svg';
import shopping from '../../assets/images/Header/shopping-icon.svg';
import user from '../../assets/images/Header/user-icon.svg';
import hamburger from '../../assets/images/Header/hamburger.svg';
import close_icon from '../../assets/images/Header/close-img.svg';
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu(prev => !prev)
    };

    return (
        <header>
            <div className='header-top'>
                <div className='header-left'>
                    <div className='lang'>Az</div>
                    <img className='search-icon' src={search} alt="search-icon" />
                </div>
                <div className="logo"><Link to="/"><strong>HomeDecor</strong></Link></div>
                <div className='header-right'>
                    <img className='shop-img' src={shopping} alt="shopping-img" />
                    <img className='user-img' src={user} alt="shopping-img" />
                </div>
                <div className="burger">
                    <img className='mobile-search-icon' src={search} alt="search-icon" />
                    <img onClick={handleClick} src={hamburger} alt="hamburger-icon" />
                </div>
            </div>
            <nav className="navbar">
                <ul className="links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections">
                            Collections
                        </Link>
                    </li>
                    <li>
                        <Link to="/sale">
                            Sale
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={openMenu ? "mobile-menu" : "mobile-menu deactive-mobile-menu"} id='mobile_menu'>
                <div className='header-top'>
                    <div className='header-mobile-left'>
                        <img src={shopping} alt="shopping-img" />
                        <img src={user} alt="user-icon" />
                    </div>
                    <div className="mobile-close">
                        <img onClick={handleClick} src={close_icon} alt="close-icon" />
                    </div>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/" onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleClick}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={handleClick}>
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections" onClick={handleClick}>
                            Collections
                        </Link>
                    </li>
                    <li>
                        <Link to="/sale" onClick={handleClick}>
                            Sale
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header> 
    );
};

export default Navbar;