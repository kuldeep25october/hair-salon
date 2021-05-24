import React from 'react'
import './style.scss';
import MainServiceColumn from '../MainServices/Components/MainServiceColumn/index'
import MainServiceColumnMap from '../../../../Constant/MainServicesColumnMap'
import { Row } from 'react-bootstrap'


const MainServices = () => {
    return (
        <>
            <div className="ServicesOffered">
                <Row>
                    {
                        MainServiceColumnMap.map((val, ind) => {
                            return (
                                <MainServiceColumn
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    antcardbg={val.antcardbg}
                                    MainServ_h2={val.MainServ_h2}
                                    MainServPara={val.MainServPara}
                                />
                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default MainServices;

