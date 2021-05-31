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
                        <h1>Get In Touch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <address className="ContactInfo">
                            <EnvironmentOutlined />
                            <h2>Address</h2>
                            <p>27 Division St, New York, USA</p>
                            <PhoneOutlined />
                            <h2>Phone</h2>
                            <p>1-677-124-44227</p>
                            <PhoneOutlined />
                            <h2>Phone</h2>
                            <p>1-677-124-44228</p>
                            <MailOutlined />
                            <h2>Email</h2>
                            <p>email@salon.com</p>
                            <MailOutlined />
                            <h2>Email</h2>
                            <p>support@salon.com</p>
                        </address>
                    </Col>
                    <Col lg='6'>
                        <div className='contactForm'>
                            <p>Your Name (required)</p>
                            <input type="text" />
                            <p>Your Email (required)</p>
                            <input type="text" />
                            <p>Subject</p>
                            <input type="text" />
                            <p>Your Message</p>
                            <textarea className='formMsg' rows="10" cols="30" />
                            <input id='sbmtBtn' type="button" value="SEND" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default ContactDetails;