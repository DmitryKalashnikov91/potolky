import React from 'react';
import { Layout } from '../components/layout';
const Error = () => {
    return (
        <>
            <Layout>
                <h1 className='mt-20 ms-28'>404</h1>
                <p>Что-то пошло не так или страница не существует</p>
            </Layout>
        </>
    );
};

export default Error;
