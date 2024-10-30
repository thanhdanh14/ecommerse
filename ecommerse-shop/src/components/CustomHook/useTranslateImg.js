import { useEffect, useRef, useState } from 'react';

const useTranslateImgX = () => {
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

    return { scrollPosition, translateX, handleTranslateX };
};

export default useTranslateImgX;
