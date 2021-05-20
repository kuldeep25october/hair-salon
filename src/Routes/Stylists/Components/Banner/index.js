import React from 'react'
import './style.scss'
import { Images } from '../../../../Shared/Assets'

const TeamBanner = () => {
    return (
        <>
            <div className="TeamBanner">
                <div className="BannerHead">
                    <img alt="" src={Images.ServicePageBanner} />
                    <h1>OUR TEAM</h1>
                </div>
            </div>
        </>
    )
}
export default TeamBanner;