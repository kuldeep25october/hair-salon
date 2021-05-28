import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'

const ContactDetails = () => {
    return (
        <>
            <div className="ContactDetails">
                <Row>
                    <Col lg='6'>
                        <ul>
                            <li>
                                <h1>Get In Touch</h1>
                            </li>

                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </li>

                            <li>
                                <ul className="ContactInfo">
                                    <li>
                                        <EnvironmentOutlined />
                                    </li>

                                    <li>
                                        <h2>Address</h2>
                                    </li>

                                    <li>
                                        <p>27 Division St, New York, USA</p>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </Col>
                    <Col lg='6'>
                        <ul className='contactForm'>
                            <li>
                                <p>Your Name (required)</p>
                            </li>
                            <li>
                                <input type="text" class="input" value="" />
                            </li>

                        </ul>
                    </Col>

                </Row>
            </div>
        </>
    )

}
export default ContactDetails;