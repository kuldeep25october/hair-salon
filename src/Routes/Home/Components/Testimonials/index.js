import React from 'react'
import './style.scss'
import TestimonialColumn from '../Testimonials/Components/TestimonialColumn/index'
import TestColumnMap from '../../../../Constant/TestColumnMap'
import { Row } from 'react-bootstrap'

const Testimonial = () => {
    return (
        <>
            <div className="Testimonials">
                <Row style={{justifyContent: 'center'}}>
                    <h2>CLIENTS TESTIMONIALS</h2>
                </Row>
                <Row>
                    {
                        TestColumnMap.map((val, ind) => {
                            return (
                                <TestimonialColumn
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    Test_h3={val.Test_h3}
                                    Test_h4={val.Test_h4}
                                    TestPara={val.TestPara}

                                />

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default Testimonial;