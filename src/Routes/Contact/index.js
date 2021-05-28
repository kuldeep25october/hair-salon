import React from 'react'
import Pages from '../../Components/HOC/Page/index'
import ContactBanner from '../Contact/Components/ContactBanner/index'
import ContactMap from '../Contact/Components/ContactMap/index'


class Contact extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <ContactBanner />
                    <ContactMap />
                </Pages>
            </>
        );
    }
}
export default Contact;
