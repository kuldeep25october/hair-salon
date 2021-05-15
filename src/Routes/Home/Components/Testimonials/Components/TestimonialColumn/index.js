import React from 'react'
import { Col } from 'react-bootstrap'

const TestimonialColumn = (props) => {
    return (
        <>
            <Col lg="6">
                <div className="carousel-main">
                    <img alt="" src={props.imgsrc} />
                    <ul class="text-center">
                        <li>
                            <h3>{props.Test_h3}</h3>
                        </li>

                        <li>
                            <h4>{props.Test_h4}</h4>
                        </li>

                        <li>
                            <p>{props.TestPara}</p>
                        </li>
                    </ul>
                </div>
            </Col>
        </>
    )
}
export default TestimonialColumn;