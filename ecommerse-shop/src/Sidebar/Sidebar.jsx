import { useContext } from 'react';
import styles from './styles.module.scss';
import { ContextSideBar } from '@components/contexts/SideBarContext';
import classNames from 'classnames';
import { GrClose } from 'react-icons/gr';
import LoginForm from '@components/SideBarUi/Login/Login';
import Contact from '@components/Contact/Contact';
function Sidebar() {
    const { container, overplay, loginform, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, contentMenu } = useContext(ContextSideBar);

    const handleRenderComponent = () => {
        switch (contentMenu) {
            case 'Sign in':
                return <LoginForm />;
            case 'Contact':
                return <Contact />;
            default:
                return null;
        }
    };

    console.log(contentMenu);
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
                {handleRenderComponent()}
            </div>
        </div>
    );
}

export default Sidebar;
