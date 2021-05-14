import React from 'react'
import './style.scss';
import { Images } from "../../../../Shared/Assets";
import { Row, Col } from 'react-bootstrap'

const WorkExperience = () => {
    return (
        <>
            <div className="WorkExperience">
                <Row>
                    <Col lg='6'>
                        <ul>
                            <li>
                                <h1>20+ Years of Experience</h1>
                            </li>

                            <li>
                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                            </li>

                            <li>
                                <a href="">Make an Appointment</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='6'>
                        <img alt="icon" src={Images.HairSalon_8} />
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default WorkExperience;