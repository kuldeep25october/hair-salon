import React from 'react'
import './style.scss'
import BlogColumn from '../Blog/Components/BlogColumn/index'
import BlogColumnMap from '../../../../Constant/BlogColumnMap'
import { Row } from 'react-bootstrap'


const LatestBlog = () => {
    return (
        <>
            <div className="LatestBlogs">
                <Row style={{justifyContent: 'center'}}>
                    <h1>LATEST BLOG</h1>
                </Row>
                <Row>
                    {
                        BlogColumnMap.map((val, ind) => {
                            return (
                                <BlogColumn
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    Blog_h2={val.Blog_h2}
                                    BlogAvatar={val.BlogAvatar}
                                    BlogPara1={val.BlogPara1}
                                    BlogPara2={val.BlogPara2}
                                    BlogPara3={val.BlogPara3}
                                    BlogPara4={val.BlogPara4}
                                    BlogPara5={val.BlogPara5}
                                    BlogLink={val.BlogLink}
                                />

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default LatestBlog;