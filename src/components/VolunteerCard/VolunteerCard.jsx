import s from './VolunteerCard.module.scss';

const VolunteerCard = ({ title, description }) => {
    return (
        <div className={s.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default VolunteerCard;
