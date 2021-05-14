import React from 'react'
import './style.scss'
import { Images } from '../../../../Shared/Assets'

const Banner = () => {
    return (
        <>
            <div className="ServiceBanner">
                <div className="BannerHeading">
                    <img alt="" src={Images.ServicePageBanner} />
                    <h1>OUR SERVICES</h1>
                </div>
            </div>
        </>
    )
}
export default Banner;