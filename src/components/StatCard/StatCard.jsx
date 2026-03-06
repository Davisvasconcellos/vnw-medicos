import s from './StatCard.module.scss';

const StatCard = ({ number, label }) => {
    return (
        <div className={s.card}>
            <h3>{number}</h3>
            <p>{label}</p>
        </div>
    );
};

export default StatCard;
