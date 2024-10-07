import styles from '../styles.module.scss';
import fbicon from '@icons/svg/fbicon.svg';
import inicon from '@icons/svg/insicon.svg';
import ytbicon from '@icons/svg/ytbicon.svg';
import hearticon from '@icons/svg/hearticon.svg';
import carticon from '@icons/svg/carticon.svg';
import reloadicon from '@icons/svg/reload.svg';
function BoxIcon({ type, href }) {
    const { containerHeader, boxIcon } = styles;
    const renderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbicon;
            case 'ig':
                return inicon;
            case 'ytb':
                return ytbicon;
            case 'heart':
                return hearticon;
            case 'cart':
                return carticon;
            case 'reload':
                return reloadicon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={renderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
