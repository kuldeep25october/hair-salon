import React from 'react'
import { Col } from 'react-bootstrap'

const FeatureColumn = (props) => {
    return (
        <>
            <Col lg="4">
                <div className="MainFeaturesImage">
                    <img alt="icon" src={props.imgsrc} />
                    <p>{props.featpara}</p>
                </div>
            </Col>
        </>
    )
}
export default FeatureColumn;