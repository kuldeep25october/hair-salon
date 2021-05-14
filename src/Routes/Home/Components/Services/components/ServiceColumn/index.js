import React from 'react'
import { Col } from 'react-bootstrap'

const ServiceColumn = (props) => {
    return (
        <>
            <Col lg="4">
                <div className="ant-card">
                    <div className="ant-card-image">
                        <img alt="" src={props.imgsrc} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="ant-card-body">
                        <div className="ant-card-body-main">
                            <ul>
                                <li>
                                    <h2>{props.Serv_h2}</h2>
                                </li>
                                <li>
                                    <p>{props.ServPara}</p>
                                </li>
                                <li>
                                    <a href="#">{props.ServLink}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </Col>
        </>
    )
}
export default ServiceColumn;