import s from './QueroSerVoluntario.module.scss';
import VolunteerCard from '../../components/VolunteerCard/VolunteerCard';
import FormVoluntario from '../../components/FormVoluntario/FormVoluntario';

const QueroSerVoluntario = () => {
    return (
        <main className={s.main}>
            <section className={s.section}>
                <div className={s.container}>
                    <h2>Seja Voluntário</h2>
                    <p className={s.subtitle}>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
                    
                    <div className={s.cardsGrid}>
                        <VolunteerCard 
                            title="Impacto Direto" 
                            description="Sua dedicação salva vidas e transforma comunidades" 
                        />
                        <VolunteerCard 
                            title="Crescimento Pessoal" 
                            description="Desenvolva habilidades e cresça profissionalmente" 
                        />
                        <VolunteerCard 
                            title="Comunidade" 
                            description="Faça parte de uma rede de profissionais comprometidos" 
                        />
                    </div>
                </div>
            </section>

            <section className={s.formSection}>
                <div className={s.container}>
                    <FormVoluntario />
                </div>
            </section>
        </main>
    );
};

export default QueroSerVoluntario;
