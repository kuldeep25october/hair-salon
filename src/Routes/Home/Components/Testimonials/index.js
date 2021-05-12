import React from 'react'
import './style.scss';

const Testimonial = () => {
    return (
        <>
            <div className="Testimonials">
                <div className="row">
                    <h2>CLIENTS TESTIMONIALS</h2>
                    <div className="TestimonialsCarousel">
                        <div className="carousel-indicators">
                            <div className="carousel-indicators-active"></div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item-active">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="carousel-main">
                                            <img alt="" src="https://demo.theme-junkie.com/hair-salon/files/2020/10/woman_2.jpg" />
                                            <ul class="text-center">
                                                <li>
                                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in dolores, quisquam architecto reprehenderit sunt inventore ad reiciendis sed laudantium id quos omnis. Suscipit, quis recusandae! Architecto, tempore? Eveniet, odit?</h3>
                                                </li>

                                                <li>
                                                    <h4>Jane Doe</h4>
                                                </li>

                                                <li>
                                                    <p>Founder</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="carousel-main">
                                            <img alt="" src="https://demo.theme-junkie.com/hair-salon/files/2020/10/woman_2.jpg" />
                                            <ul class="text-center">
                                                <li>
                                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in dolores, quisquam architecto reprehenderit sunt inventore ad reiciendis sed laudantium id quos omnis. Suscipit, quis recusandae! Architecto, tempore? Eveniet, odit?</h3>
                                                </li>

                                                <li>
                                                    <h4>Jane Doe</h4>
                                                </li>

                                                <li>
                                                    <p>Founder</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Testimonial;