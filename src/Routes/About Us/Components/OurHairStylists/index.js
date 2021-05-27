import React from 'react'
import './style.scss';
import OurHairStylistColumn from '../OurHairStylists/Components/OurHairStylistsColumn/index'
import OurHairStylistColumnMap from '../../../../Constant/OurHairStylistsColumnMap'
import { Row } from 'react-bootstrap'

const OurHairStylistContent = () => {
    return (
        <>
            <div className="OurHairStylistInfo">
                <Row style={{ justifyContent: 'center' }}>
                    <h3>OUR HAIR STYLISTS</h3>
                </Row>
                <Row>
                    {
                        OurHairStylistColumnMap.map((val, ind) => {
                            return (
                                <OurHairStylistColumn
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
export default OurHairStylistContent;
