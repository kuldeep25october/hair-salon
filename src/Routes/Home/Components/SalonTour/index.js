import React from 'react'
import './style.scss';

const Tour = () =>{
    return(
        <>
            <div className="SalonTour">
            <div className="row">
            <div className="col-lg-4">
            <ul className="salon-tour-body text-center">
            <li>
            <h1>Our Salon Tour</h1>
            </li>

            <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>

            <li>
            <a href="#">Make an Appointment</a>
            </li>
            </ul>
            </div>
            <div class="ReactYTPlayer col-lg-8">
            <div style={{float: 'right', width: '640px', height: '360px'}}>
            <div style={{width: '100%', height: '100%'}}>
            <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/uO1RnThE-Eg?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=http%3A%2F%2F192.168.1.21%3A3000&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2"></iframe>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
    
}
export default Tour;