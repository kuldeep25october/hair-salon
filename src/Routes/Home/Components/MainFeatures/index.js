import React from 'react'
import './style.scss';

const Features = () =>{
    return(
        <>
            <div className="MainFeatures">
            <div className="Row">
                    <div className="col-lg-4">
                        <div className="MainFeaturesImage">
                            <img alt="icon" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_7.jpg"}/>
                            <p>Hair Color</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="MainFeaturesImage">
                            <img alt="icon" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_7.jpg"}/>
                            <p>Make Up</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="MainFeaturesImage">
                            <img alt="icon" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_7.jpg"}/>
                            <p>Spa Care</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features;