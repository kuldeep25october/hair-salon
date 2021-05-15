import React from 'react'
import { Col } from 'react-bootstrap'

const BlogColumn = (props) => {
    return (
        <>
            <Col lg="4">
                <div className="BlogBody">
                    <div className="ant-card" style={{ width: '100%' }}>
                        <div className="ant-card-image">
                            <img alt="icon" src={props.imgsrc} />
                        </div>
                        <div className="ant-card-body">
                            <ul className="BlogMain">
                                <li>
                                    <h2>{props.Blog_h2}</h2>
                                </li>
                                <li>
                                    <ul className="BlogAvtar d-flex">
                                        <li>
                                            <img alt="icon" src={props.BlogAvatar} />
                                        </li>

                                        <li>
                                            <p>
                                                <span>{props.BlogPara1}</span>
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                <span>{props.BlogPara2}</span>
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                <span>{props.BlogPara3}</span>
                                                {props.BlogPara4}</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>{props.BlogPara5}</p>
                                </li>
                                <li>
                                    <a href="#">{props.BlogLink}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default BlogColumn;