import React from 'react'
import './style.scss'
import { Images } from '../../../../Shared/Assets'

const AboutUsBanner = () => {
    return (
        <>
            <div className="aboutUsBanner">
                <img alt="" src={Images.ServicePageBanner} />
                <h1>ABOUT US</h1>
            </div>
        </>
    )
}
export default AboutUsBanner;