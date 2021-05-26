import React from 'react'
import Pages from '../../Components/HOC/Page/index'
import AboutUsBanner from '../About Us/Components/AboutUsBanner/index'
import OurSalonTour from '../About Us/Components/OurSalonTour/index'
import StylistCollage from '../About Us/Components/StylistsCollage/index'
class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <AboutUsBanner />
                    <OurSalonTour />
                    <StylistCollage />
                </Pages>
            </>
        );
    }
}
export default AboutUs;
