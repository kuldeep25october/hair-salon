import React from 'react'
import Pages from '../../Components/HOC/Page/index'
import TeamBanner from '../Stylists/Components/Banner/index'
import StylistContent from '../Stylists/Components/OurTeam/index'

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
                </Pages>
            </>
        );
    }
}
export default Stylists;
