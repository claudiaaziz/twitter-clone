import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required('Username is required'),
        password: Yup.string().min(8).max(15).required('Password is required'),
    });

    const onSubmit = (data) => {
        axios
            .post('http://localhost:5006/auth/sign-up', data)
            .then(res => console.log(res));
            // .then(navigate('/'));
    };

    return (
        <div className='form'>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
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
                    <button type='submit'>Sign Up</button>
                </Form>
            </Formik>
        </div>
    );
}
