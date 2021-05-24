import React from 'react'
import './style.scss';
import HairStylistColumn from '../Hair Stylists/Components/HairStylistColumn/index'
import HairStylistColumnMap from '../../../../Constant/HairStylistColumnMap'
import { Row } from 'react-bootstrap'

const HairStylistContent = () => {
    return (
        <>
            <div className="HairStylistInfo">
                <Row style={{justifyContent: 'center'}}>
                    <h3>HAIR STYLISTS</h3>
                </Row>
                <Row>
                    {
                        HairStylistColumnMap.map((val, ind) => {
                            return (
                                <HairStylistColumn
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    StylistName={val.StylistName}
                                    StylistDesg={val.StylistDesg}
                                />

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default HairStylistContent;
