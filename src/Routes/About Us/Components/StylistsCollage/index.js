import React from 'react'
import './style.scss';
import { Row } from 'react-bootstrap'
import StylistCollageColumn from '../StylistsCollage/Components/StylistsCollageColumn/index'
import StylistsCollageColumnMap from '../../../../Constant/StylistsCollageColumnMap'

const StylistCollage = () => {
    return (
        <>
            <div className="TeamCollage">
                <Row>
                    {
                        StylistsCollageColumnMap.map((val, ind) => {
                            return (
                                <StylistCollageColumn
                                    key={ind}
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
export default StylistCollage;