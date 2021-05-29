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
                                <p>27 Division St, New York, USA</p><br/>

                                <PhoneOutlined />
                                <h2>Phone</h2>
                                <p>1-677-124-44227</p><br/>
                                <PhoneOutlined />
                                <h2>Phone</h2>
                                <p>1-677-124-44228</p><br/>
                                <MailOutlined />
                                <h2>Email</h2>
                                <p>email@salon.com</p><br/>
                                <MailOutlined />
                                <h2>Email</h2>
                                <p>support@salon.com</p><br/>
                                </address>
             
                    </Col>
                    <Col lg='6'>
                        <div className='contactForm'>
                            <p>Your Name (required)</p>
                            <input type="text" /><br/><br/>
                            <p>Your Email (required)</p>
                            <input type="text" /><br/><br/>
                            <p>Subject</p>
                            <input type="text" /><br/><br/>
                            <p>Your Message</p>
                            <input id='formMsg' type="text" /><br/>
                            <input id='sbmtBtn' type="button" value="SEND"/>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )

}
export default ContactDetails;