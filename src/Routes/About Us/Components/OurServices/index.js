import React from 'react'
import './style.scss';
import OurServiceColumn from '../OurServices/Components/OurServicesColumn/index'
import OurServiceColumnMap from '../../../../Constant/OurServicesColumnMap'
import { Row } from 'react-bootstrap'

const OurServices = () => {
    return (
        <>
            <div className="OurServicesAbt">
                <Row style={{ justifyContent: 'center' }}>
                    <h3>OUR SERVICES</h3>
                </Row>
                <Row>
                    {
                        OurServiceColumnMap.map((val, ind) => {
                            return (
                                <OurServiceColumn
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    Serv_h2={val.Serv_h2}
                                    ServPara={val.ServPara}
                                    ServLink={val.ServLink}
                                />

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default OurServices;
