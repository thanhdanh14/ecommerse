import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import {
    dataBoxIcon,
    dataMenu,
    dataBoxIconRight
} from '@components/Header/constant';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
function Header() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} herf={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} herf={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        {dataBoxIconRight.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
