import React from 'react'
import './style.scss';
import { Col } from 'react-bootstrap'
import { Images } from '../../../../Shared/Assets'


const StylistCollage = () => {
    return (
        <>
            <div className="StylistCollage">
                <Col lg='3'>
                    <img alt='' src={Images.HairSalon_8} />
                </Col>
                <Col lg='3'>
                    <img alt='' src={Images.HairSalon_8} />
                </Col>
                <Col lg='3'>
                    <img alt='' src={Images.HairSalon_8} />
                </Col>
                <Col lg='3'>
                    <img alt='' src={Images.HairSalon_8} />
                </Col>
            </div>
        </>
    )

}
export default StylistCollage;