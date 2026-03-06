import s from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.brand}>
                    <div className={s.logo}>
                        <div className={s.iconWrapper}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="10" fill="#00745A"/>
                            </svg>
                            <span className={s.heartIcon}>♥</span>
                        </div>
                        <span>Médicos & Dentistas</span>
                    </div>
                    <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </div>

                <div className={s.contact}>
                    <h3>Contato</h3>
                    <ul>
                        <li><MdEmail /> contato@medico-dentista.org</li>
                        <li><MdPhone /> (11) 3000-0000</li>
                        <li><MdLocationOn /> São Paulo, Brasil</li>
                    </ul>
                </div>

                <div className={s.social}>
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li><a href="#"><FaFacebook /> Facebook</a></li>
                        <li><a href="#"><FaInstagram /> Instagram</a></li>
                        <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}>
                <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
