import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useEffect, useRef, useState } from 'react';
import useTranslateImgX from '@components/CustomHook/useTranslateImg';
function SaleHomePage() {
    const { container, boxImg, titleBox, des, boxBtn } = styles;

    const [srollDown, setscrollDown] = useState(null);
    const periousScrollPosition = useRef(0);
    const [translateX, settranslateX] = useState(80);
    const [scrollPosition, setscrollPosition] = useState(0);

    const scorllTracking = () => {
        const currentPosition = window.pageYOffset;
        if (currentPosition > periousScrollPosition.current) {
            setscrollDown('down');
        } else if (currentPosition < periousScrollPosition.current) {
            setscrollDown('up');
        }
        periousScrollPosition.current =
            currentPosition <= 0 ? 0 : currentPosition;
        setscrollPosition(currentPosition);
    };

    const handleTranslateX = () => {
        if (srollDown === 'down' && scrollPosition >= 1500) {
            settranslateX(translateX <= 0 ? 0 : translateX - 1);
        } else if (srollDown === 'up') {
            settranslateX(translateX >= 80 ? 80 : translateX + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scorllTracking);

        return () => window.removeEventListener('scroll', scorllTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <img src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg' />
            </div>
            <div>
                <h2 className={titleBox}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content='Read more' isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <img src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg' />
            </div>
        </div>
    );
}

export default SaleHomePage;
