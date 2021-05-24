import React from 'react'
import Pages from '../../Components/HOC/Page/index'
import TeamBanner from '../Stylists/Components/Banner/index'
import StylistContent from '../Stylists/Components/OurTeam/index'
import HairStylistContent from '../Stylists/Components/Hair Stylists/index'
import NailMastersContent from '../Stylists/Components/NailMasters/index'

class Stylists extends React.Component {
    render() {
        return (
            <>
                <Pages
                    showHeader
                    showFooter
                >
                    <TeamBanner />
                    <StylistContent/>
                    <HairStylistContent/>
                    <NailMastersContent/>
                </Pages>
            </>
        );
    }
}
export default Stylists;
