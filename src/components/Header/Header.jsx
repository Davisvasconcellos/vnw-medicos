import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.logo} onClick={closeMenu}>
                    <div className={s.iconWrapper}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="#00745A"/>
                        </svg>
                        <FaHeart className={s.heartIcon} size={18} color="#FFF" />
                    </div>
                    <span>Médicos & Dentistas</span>
                </Link>

                <button className={s.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                <nav className={`${s.nav} ${isMenuOpen ? s.open : ''}`}>
                    <Link to="/" className={s.link} onClick={closeMenu}>Home</Link>
                    <Link to="/quero-ser-voluntario" className={s.button} onClick={closeMenu}>Seja Voluntário</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
