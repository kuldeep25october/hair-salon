import React from 'react'
import './style.scss';
import FeatureColumn from '../MainFeatures/components/FeatureColumn/index'
import FeatureColumnMap from '../../../../Constant/FeatureColumnMap'
import { Row } from 'react-bootstrap'


const Features = () => {
    return (
        <>
            <div className="MainFeatures">
                <Row>
                    {
                        FeatureColumnMap.map((val, ind) => {
                            return (
                                <FeatureColumn
                                    key={ind}
                                    featpara={val.featpara}
                                    imgsrc={val.imgsrc}
                                />

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default Features;