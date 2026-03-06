import s from './FormVoluntario.module.scss';

const FormVoluntario = () => {
    return (
        <form className={s.form}>
            <h3>Inscrição para Voluntários</h3>

            <div className={s.section}>
                <h4>Dados Pessoais</h4>
                <div className={s.row}>
                    <input type="text" placeholder="Seu Nome *" required />
                    <input type="email" placeholder="Seu Email *" required />
                </div>
                <div className={s.fullRow}>
                    <input type="tel" placeholder="Seu Telefone *" required />
                </div>
            </div>

            <div className={s.section}>
                <h4>Mensagem Adicional</h4>
                <textarea placeholder="Conte-nos porque você quer ser voluntario..."></textarea>
            </div>

            <div className={s.footer}>
                <p>Entraremos em contato para mais informações</p>
                <button type="submit">Enviar Inscrição</button>
            </div>
        </form>
    );
};

export default FormVoluntario;
