import React from 'react'
import { Col } from 'react-bootstrap'

const MainServiceColumn = (props) => {
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
                                    <h2>{props.MainServ_h2}</h2>
                                </li>
                                <li>
                                    <p>{props.MainServPara}</p>
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
export default MainServiceColumn;