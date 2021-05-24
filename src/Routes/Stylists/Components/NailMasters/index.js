import React from 'react'
import './style.scss';
import NailMastersColumn from '../NailMasters/Components/NailMastersColumn/index'
import NailMastersColumnMap from '../../../../Constant/NailMastersColumnMap'
import { Row } from 'react-bootstrap'

const NailMastersContent = () => {
    return (
        <>
            <div className="NailMastersInfo">
                <Row style={{justifyContent: 'center'}}>
                    <h3>NAIL MASTERS</h3>
                </Row>
                <Row>
                    {
                        NailMastersColumnMap.map((val, ind) => {
                            return (
                                <NailMastersColumn
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
export default NailMastersContent;
