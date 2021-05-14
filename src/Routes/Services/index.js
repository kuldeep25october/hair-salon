import React from 'react'
import Pages from '../../Components/HOC/Page/index'
import Banner from '../Services/Components/Banner/index'
import MainServices from '../Services/Components/MainServices/index'
import WorkExp from '../Services/Components/WorkExperience/index'

class Services extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <Banner />
                    <MainServices />
                    <WorkExp />
                </Pages>
            </>
        );
    }
}
export default Services;
