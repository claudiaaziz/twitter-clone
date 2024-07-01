import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const onSubmit = (data) => {
        axios
            .post('http://localhost:5006/auth/login', data)
            .then(res => console.log(res));
            // .then(navigate('/'));
    };

    return (
        <div className='form'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <label htmlFor='username'>Username:</label>
                    <Field
                        id='username'
                        name='username'
                        placeholder='Username'
                    />
                    <ErrorMessage
                        name='username'
                        component='span'
                        className='error-msg'
                    />
                    <label htmlFor='password'>Password:</label>
                    <Field
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                    />
                    <ErrorMessage
                        name='password'
                        component='span'
                        className='error-msg'
                    />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    );
}
