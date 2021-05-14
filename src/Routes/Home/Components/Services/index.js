import React from 'react'
import './style.scss';
import ServiceColumn from '../Services/components/ServiceColumn/index'
import ServiceColumnMap from '../../../../Constant/ServiceColumnMap'
import { Row } from 'react-bootstrap'

const Services = () => {
    return (
        <>
            <div className="OurServices">
                <Row>
                    {
                        ServiceColumnMap.map((val, ind) => {
                            return (
                                <ServiceColumn
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
export default Services;
