import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadlingListProducts from '@components/HeadlingListProducts/HeadlingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

function HomePage() {
    const { container } = styles;
    const [productItem, setproductItem] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setproductItem(res.contents);
        });
    }, []);

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
                {/* <div style={{ height: '200px' }}></div> */}
            </div>
        </div>
    );
}

export default HomePage;
