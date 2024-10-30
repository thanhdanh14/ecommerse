import { useContext } from 'react';
import styles from '../styles.module.scss';
import { ContextSideBar } from '@components/contexts/SideBarContext';
function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen } = useContext(ContextSideBar);

    return (
        <div className={menu} onClick={() => setIsOpen(true)}>
            {content}
        </div>
    );
}

export default Menu;
