import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactFormSection from '../components/home/contact/ContactFormSection';

const ContactPage = () => {
    return (
        <div>
            <PageHeader title="Contact Us" />
             <ContactFormSection />
        </div>
    );
};

export default ContactPage;