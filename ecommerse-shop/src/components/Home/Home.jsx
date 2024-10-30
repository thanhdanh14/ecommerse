import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadlingListProducts from '@components/HeadlingListProducts/HeadlingListProducts';
import { useEffect, useRef, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';
import { FaChessKing, FaCircleArrowUp } from 'react-icons/fa6';
import useScrollHandleLing from '@components/hooks/useScrollHandling';

function HomePage() {
    const { container, btnSroll } = styles;
    const [productItem, setproductItem] = useState([]);
    const [showBtn, setShowBtn] = useState(false);
    const { scrollPosition } = useScrollHandleLing();
    const btnRef = useRef(null);
    useEffect(() => {
        if (scrollPosition > 80) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    }, [scrollPosition]);
    useEffect(() => {
        getProducts().then((res) => {
            setproductItem(res.contents);
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProducts data={productItem.slice(1, 3)} />
                <PopularProduct
                    data={productItem.slice(3, productItem.length)}
                />
                <SaleHomePage />
                <Footer />
                {showBtn && (
                    <div
                        id='btnOtoTop'
                        className={btnSroll}
                        onClick={scrollToTop}
                        ref={btnRef}
                    >
                        <FaCircleArrowUp />
                    </div>
                )}

                {/* <div style={{ height: '200px' }}></div> */}
            </div>
        </div>
    );
}

export default HomePage;
