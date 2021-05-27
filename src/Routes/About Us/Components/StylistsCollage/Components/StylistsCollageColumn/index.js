import React from 'react'
import { Col } from 'react-bootstrap'

const StylistCollageColumn = (props) => {
    return (
        <>
            <Col lg='3'>
                <img alt='' src={props.imgsrc} />
            </Col>
        </>
    )
}
export default StylistCollageColumn;