import InputCommon from '@components/common/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { loginService } from '@/apis/loginService';
function LoginForm() {
    const { container, title, fgPassword } = styles;
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const submitForm = (data) => {
        loginService(data);
    };
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <form onSubmit={handleSubmit(submitForm)}>
                <Controller
                    control={control}
                    name='username'
                    rules={{
                        required: true
                        // pattern: {
                        //     value: /^\S+@\S+$/i,
                        //     message: 'Invalid email'
                        // }
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <InputCommon
                            content={'UserName or email'}
                            type={'text'}
                            isRequired
                            onChange={(data) => onChange(data)}
                            _
                        />
                    )}
                />
                {errors.username && (
                    <p style={{ color: 'red' }}>{errors.username.message}</p>
                )}

                <Controller
                    control={control}
                    name='password'
                    rules={{
                        required: true,
                        minLength: 6
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <InputCommon
                            content={'Password'}
                            type={'password'}
                            isRequired
                            onChange={onChange}
                        />
                    )}
                />

                {errors.password && (
                    <p style={{ color: 'red' }}>{errors.password.message}</p>
                )}

                <div style={{ marginBottom: '10px' }}>
                    <input type='checkbox' /> Remember me
                </div>
                <Button type='submit' content={'LOGIN'} />
            </form>
            <div className={fgPassword}>lost your password?</div>
        </div>
    );
}

export default LoginForm;
