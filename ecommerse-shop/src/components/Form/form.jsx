import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

function HookForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'inputlove'
    });
    const submitForm = (data) => {
        console.log(data);
    };

    const map = new Map();

    const result = true && 'javascript' && 42 && null && 'end';
    console.log(result);

    // map.set('name', 'John');
    // map.set('age', 23);

    // map.forEach((value, key) => {
    //     console.log(`${key} : ${value}`);
    // });
    return (
        <form
            onSubmit={handleSubmit(submitForm)}
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
            <div>
                <label>UserName</label>
                <input
                    type='text'
                    {...register('username', {
                        required: 'userName is required'
                    })}
                />
                {errors.username && (
                    <p style={{ color: 'red' }}>{errors.username.message}</p>
                )}
                <label>Email</label>
                <input
                    type='text'
                    {...register('email', {
                        required: 'email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email'
                        }
                    })}
                />
                {errors.email && (
                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                )}
                <label>Gender</label>
                <select
                    {...register('gender', { required: 'Gender is requried' })}
                >
                    <option value=''>---Select---</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                {errors.gender && (
                    <p style={{ color: 'red' }}>{errors.gender.message}</p>
                )}

                <Controller
                    control={control}
                    name='password'
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <TextField
                            id='filled-basic'
                            label='Filled'
                            variant='filled'
                            onChange={(data) => onChange(data)}
                        />
                    )}
                />

                {fields.map((item, index) => (
                    <div>
                        <input
                            key={item.id}
                            {...register(`inputlove[${index}].text`)}
                        />
                        <button onClick={() => remove(index)}>delete</button>
                    </div>
                ))}
                <button type='button' onClick={() => append({ text: '' })}>
                    add field
                </button>
                {/* <DatePicker
                label='Controlled picker'
                value={value}
                onChange={(newValue) => setValue(newValue)}
            /> */}
                <button type='submit'>CLICK</button>
            </div>
        </form>
    );
}

export default HookForm;
