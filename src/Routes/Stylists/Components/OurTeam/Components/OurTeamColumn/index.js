import React from 'react'
import { Col } from 'react-bootstrap'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

const StylistColumn = (props) => {
    return (
        <>
            <Col lg="4">
                <div className="content">
                    <div className="ant-card">
                        <div className="ant-card-image">
                            <img alt="" src={props.imgsrc} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div class="content-overlay"></div>
                        <div class="content-details fadeIn-bottom">
                            <div className="SocialIcons">

                                <a href="" id="Facebook"><FacebookOutlined /></a>
                                <a href="" id="Instagram"><InstagramOutlined /></a>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <h2>{props.StylistName}</h2>
                        <p>{props.StylistDesg}</p>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default StylistColumn;