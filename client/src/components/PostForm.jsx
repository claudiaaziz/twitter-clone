import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {
    const navigate = useNavigate()

    const initialValues = {
        title: '',
        body: '',
        username: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        body: Yup.string().required('Body is required'),
        username: Yup.string().min(3).max(15).required('Username is required'),
    });

    const onSubmit = (data) => {
        axios.post('http://localhost:5006/posts', data).then(navigate('/'));
    };

    return (
        <div className='post-form'>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <label htmlFor='title'>Title:</label>
                    <Field id='title' name='title' placeholder='Title' />
                    <ErrorMessage
                        name='title'
                        component='span'
                        className='error-msg'
                    />
                    <label htmlFor='body'>Body:</label>
                    <Field id='body' name='body' placeholder='Body' component='textarea' rows='10'/>
                    <ErrorMessage
                        name='body'
                        component='span'
                        className='error-msg'
                    />
                    <label htmlFor='username'>Username:</label>
                    <Field id='username' name='username' placeholder='Username' />
                    <ErrorMessage
                        name='username'
                        component='span'
                        className='error-msg'
                    />
                    <button type='submit'>Post</button>
                </Form>
            </Formik>
        </div>
    );
}