import styles from '../styles.module.scss';
import truckIcon from '@icons/svg/truckicon.svg';
function InfoCard({ content, description, src }) {
    const { containerCard, containerContent, title, des } = styles;
    return (
        <div className={containerCard}>
            <img src={src} width={40} height={41} alt={'123'} />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
