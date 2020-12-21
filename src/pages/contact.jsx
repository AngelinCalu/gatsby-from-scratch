import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <p>
                You can reach me on the phone at either{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="tel:+40747455422">
                    (+40) 747455422
                </a>{' '}
                or{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="tel:+358469065086">
                    (+358) 469065086
                </a>{' '}
                or through e-mail at{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="mailto:angelin.calu@gmail.com">
                    angelin.calu@gmail.com
                </a>
                .
            </p>
        </Layout>
    );
};

export default Contact;
