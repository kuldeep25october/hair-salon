import React from 'react'
import './style.scss'
import { Images } from '../../../../Shared/Assets'
import { Col, Row } from 'react-bootstrap'

const StylistCollage = () => {
    return (
        <>
            <div className='container-fluid'>

                <Row>
                    <Col lg='3' style={{ display: 'flex', padding: '0' }}>
                        <img alt="" src={Images.HairSalon_8} />
                        <img alt="" src={Images.HairSalon_8} />
                        <img alt="" src={Images.HairSalon_8} />
                        <img alt="" src={Images.HairSalon_8} />


                    </Col>
                </Row>
            </div>

        </>
    )
}
export default StylistCollage;