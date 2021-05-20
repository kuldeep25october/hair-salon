import React from 'react'
import './style.scss';
import StylistColumn from '../OurTeam/Components/OurTeamColumn/index'
import OurTeamColumnMap from '../../../../Constant/OurTeamColumnMap'
import { Row } from 'react-bootstrap'

const StylistContent = () => {
    return (
        <>
            <div className="StylistInfo">
                <Row style={{justifyContent: 'center'}}>
                    <h3>MAKE-UP ARTIST</h3>
                </Row>
                <Row>
                    {
                        OurTeamColumnMap.map((val, ind) => {
                            return (
                                <StylistColumn
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
export default StylistContent;
