import styles from './styles.module.scss';
function LoginForm() {
    const { container, title } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
        </div>
    );
}

export default LoginForm;
