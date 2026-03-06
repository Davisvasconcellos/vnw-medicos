import s from './MissionCard.module.scss';

const MissionCard = ({ title, description }) => {
    return (
        <div className={s.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default MissionCard;
