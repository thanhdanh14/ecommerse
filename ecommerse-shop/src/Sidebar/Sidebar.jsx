import { useContext } from 'react';
import styles from './styles.module.scss';
import { ContextSideBar } from '@components/contexts/SideBarContext';
import classNames from 'classnames';
import { GrClose } from 'react-icons/gr';
import LoginForm from '@components/SideBarUi/Login/Login';
function Sidebar() {
    const { container, overplay, loginform, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(ContextSideBar);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={container}>
            <div
                className={classNames({ [overplay]: isOpen })}
                onClick={handleClick}
            ></div>
            <div className={classNames(loginform, { [slideSideBar]: isOpen })}>
                <div
                    className={classNames({ [boxIcon]: isOpen })}
                    onClick={handleClick}
                >
                    <GrClose />
                </div>
                <LoginForm />
            </div>
        </div>
    );
}

export default Sidebar;
