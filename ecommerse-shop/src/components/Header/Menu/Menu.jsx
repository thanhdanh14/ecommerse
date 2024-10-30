import { useContext } from 'react';
import styles from '../styles.module.scss';
import { ContextSideBar } from '@components/contexts/SideBarContext';
function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setContentMenu } = useContext(ContextSideBar);
    const handleLogicClick = () => {
        setIsOpen(true);
        setContentMenu(content);
    };

    return (
        <div className={menu} onClick={handleLogicClick}>
            {content}
        </div>
    );
}

export default Menu;
