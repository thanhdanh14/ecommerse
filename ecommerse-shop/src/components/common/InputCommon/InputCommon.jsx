import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa6';

function InputCommon({ content, type, isRequired = false, value, onChange }) {
    const { label, input, container, boxIcon } = styles;
    const [showPasswod, setShowPassword] = useState(false);
    const isPasword = type === 'password';
    const isShowTextPassword =
        type === 'password' && showPasswod ? 'text' : type;
    const handlePassword = () => {
        setShowPassword(!showPasswod);
    };

    return (
        <div className={container}>
            <div className={label}>
                <label id='name'>
                    {content} {isRequired && <span>*</span>}
                </label>
            </div>
            <div>
                <input
                    className={input}
                    type={isShowTextPassword}
                    value={value}
                    htmlFor='name'
                    onChange={onChange}
                />
                {isPasword && (
                    <div className={boxIcon} onClick={handlePassword}>
                        {showPasswod ? <FaEye /> : <FaEyeSlash />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
