import styles from './styles.module.scss';
import hearticon from '@icons/svg/hearticon.svg';
import carticon from '@icons/svg/carticon.svg';
import reloadicon from '@icons/svg/reload.svg';
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceDiv
    } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img src={src} />
                <img src={prevSrc} className={showImgWhenHover} />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={hearticon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={carticon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadicon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadicon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceDiv}>{price}</div>
        </div>
    );
}

export default ProductItem;
