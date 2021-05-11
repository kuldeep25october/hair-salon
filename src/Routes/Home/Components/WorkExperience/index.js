import React from 'react'
import './style.scss';

const WorkExperience = () =>{
    return(
        <>
            <div className="WorkExperience">
            <div class="align-items-center row">
                <div className="col-lg-6">
                    <ul>
                        <li>
                        <h1>20+ Years of Experience</h1>
                        </li>

                        <li>
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                        </li>

                        <li>
                        <a href="">Make an Appointment</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img alt="icon" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_8.jpg"}/>
                </div>
                </div>
            </div>
        </>
    )
}
export default WorkExperience;