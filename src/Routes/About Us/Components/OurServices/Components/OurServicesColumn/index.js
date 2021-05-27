import React from 'react'
import { Col } from 'react-bootstrap'

const OurServiceColumn = (props) => {
    return (
        <>
            <Col lg="4">
                <div className="ant-card">
                    <div className="ant-card-image">
                        <img alt="" src={props.imgsrc} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="ant-card-body">
                        <h2>{props.Serv_h2}</h2>
                        <p>{props.ServPara}</p>
                        <a href="#">{props.ServLink}</a>
                        <div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default OurServiceColumn;