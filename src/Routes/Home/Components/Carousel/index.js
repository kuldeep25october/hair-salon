import React from 'react'
import { Carousel } from "react-bootstrap"
import './style.scss';

const Slider =() =>{
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_8.jpg"}/>
                    <div className="carousel-slide"></div>
                        <Carousel.Caption>
                            <h3>Hair Salon</h3>
                                <p className="d-block w-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_12.jpg"}/>
                    <div className="carousel-slide"></div>
                        <Carousel.Caption>
                            <h3>Hair Color</h3>
                                <p className="d-block w-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={"https://demo.theme-junkie.com/hair-salon/files/2020/11/hair-salon_10.jpg"}/>
                    <div className="carousel-slide"></div>
                        <Carousel.Caption>
                            <h3>Hair Stylists</h3>
                                <p className="d-block w-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}
export default Slider;