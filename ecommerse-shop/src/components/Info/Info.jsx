import { dataInfo } from '@components/Info/constant';
import MainLayout from '@components/Layout/Layout';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default Info;
