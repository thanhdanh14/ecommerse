import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import {
    dataBoxIcon,
    dataMenu,
    dataBoxIconRight
} from '@components/Header/constant';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import useScrollHandleLing from '@components/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ContextSideBar } from '@components/contexts/SideBarContext';
function Header() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandleLing();
    const [stickPosition, setSickPosition] = useState(false);
    useEffect(() => {
        if (scrollPosition > 80) {
            setSickPosition(true);
        } else {
            setSickPosition(false);
        }
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: stickPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon
                                    type={item.type}
                                    href={item.href}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    herf={item.href}
                                    key={item.id}
                                />
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
                                <Menu
                                    content={item.content}
                                    herf={item.href}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        {dataBoxIconRight.map((item) => {
                            return (
                                <BoxIcon
                                    type={item.type}
                                    href={item.href}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
