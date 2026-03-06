import s from './Home.module.scss';
import medicoImg from '../../assets/images/medico-home.png'; // Placeholder
import MissionCard from '../../components/MissionCard/MissionCard';
import StatCard from '../../components/StatCard/StatCard';

const Home = () => {
    return (
        <main className={s.main}>
            <section className={s.hero}>
                <div className={s.content}>
                    <div className={s.tag}>
                        <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3618 2.79305V5.58609" stroke="black" strokeWidth="2.79305" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.98261 2.79305V5.58609" stroke="black" strokeWidth="2.79305" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.98262 4.18958H5.5861C4.84534 4.18958 4.13491 4.48384 3.61112 5.00764C3.08732 5.53144 2.79305 6.24186 2.79305 6.98262V12.5687C2.79305 14.791 3.67585 16.9223 5.24725 18.4937C6.81864 20.0651 8.94991 20.9479 11.1722 20.9479C13.3945 20.9479 15.5257 20.0651 17.0971 18.4937C18.6685 16.9223 19.5513 14.791 19.5513 12.5687V6.98262C19.5513 6.24186 19.2571 5.53144 18.7333 5.00764C18.2095 4.48384 17.499 4.18958 16.7583 4.18958H15.3618" stroke="black" strokeWidth="2.79305" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.1722 20.9479C11.1722 23.1701 12.055 25.3014 13.6264 26.8728C15.1978 28.4442 17.329 29.327 19.5513 29.327C21.7736 29.327 23.9049 28.4442 25.4763 26.8728C27.0477 25.3014 27.9304 23.1701 27.9304 20.9479V16.7583" stroke="black" strokeWidth="2.79305" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M27.9305 16.7583C29.473 16.7583 30.7235 15.5078 30.7235 13.9652C30.7235 12.4227 29.473 11.1722 27.9305 11.1722C26.3879 11.1722 25.1374 12.4227 25.1374 13.9652C25.1374 15.5078 26.3879 16.7583 27.9305 16.7583Z" stroke="black" strokeWidth="2.79305" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Saúde para todos</span>
                    </div>

                    <h1>Saúde e cuidado <br/> sem barreiras</h1>
                    
                    <p>
                        Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.
                    </p>

                    <div className={s.actions}>
                        <button className={s.primary}>Seja Voluntário</button>
                        <button className={s.secondary}>Como Ajudar</button>
                    </div>
                </div>

                <div className={s.imageWrapper}>
                    <img src={medicoImg} alt="Médico sorrindo com estetoscópio" />
                </div>
            </section>

            <section className={s.mission}>
                <div className={s.container}>
                    <h2>Nossa Missão</h2>
                    <p className={s.subtitle}>Transformar vidas através do acesso universal a saúde de qualidade</p>
                    
                    <div className={s.cardsGrid}>
                        <MissionCard 
                            title="Acesso Equitativo" 
                            description="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira." 
                        />
                        <MissionCard 
                            title="Comunidade Forte" 
                            description="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo." 
                        />
                        <MissionCard 
                            title="Bem-estar Total" 
                            description="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida." 
                        />
                    </div>
                </div>
            </section>

            <section className={s.impact}>
                <div className={s.container}>
                    <h2>Nosso Impacto</h2>
                    <p className={s.subtitle}>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
                    
                    <div className={s.cardsGrid}>
                        <StatCard number="2,500+" label="Pessoas Atendidas" />
                        <StatCard number="150+" label="Profissionais Voluntários" />
                        <StatCard number="98%" label="Satisfação dos Pacientes" />
                        <StatCard number="5+" label="Anos de Dedicação" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
