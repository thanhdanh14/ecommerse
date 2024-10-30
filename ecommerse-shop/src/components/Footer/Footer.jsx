import { dataMenuFooter } from '@components/Header/constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
function Footer() {
    const { container, menuFooter } = styles;
    return (
        <div className={container}>
            <img
                src={Logo}
                alt='logo'
                style={{ width: '153px', height: '53px', marginTop: '20px' }}
            />
            <div className={menuFooter}>
                {dataMenuFooter.map((item) => (
                    <div key={item.id}>{item.content}</div>
                ))}
            </div>
            <div style={{ fontSize: '12px' }}>Guaranteed safe ckeckout </div>
            <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png' />
            <div style={{ fontSize: '12px' }}>
                Copyright © 2024
                <a
                    href='https://xstore.8theme.com/'
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    XStore theme
                </a>
                . Created by 8theme –
                <a
                    href='https://www.8theme.com/woocommerce-themes/'
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        paddingLeft: '10px'
                    }}
                >
                    WordPress WooCommerce themes
                </a>
            </div>
        </div>
    );
}

export default Footer;
