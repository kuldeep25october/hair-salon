import React from 'react'
import './style.scss';
import Pages from '../../Components/HOC/Page/index'
import Slider from '../Home/Components/Carousel/index'
import WorkExperience from '../Home/Components/WorkExperience/index'
import Features from '../Home/Components/MainFeatures/index'
import Testimonial from '../Home/Components/Testimonials/index'
import Services from '../Home/Components/Services/index'
import Tour from '../Home/Components/SalonTour/index'
import LatestBlog from '../Home/Components/Blog/index'

class Home extends React.Component{
    render() {
        return(
                <>
                    <Pages showHeader>
                        <Slider />
                        <WorkExperience />
                        <Features />
                        <Testimonial />
                        <Services />
                        <Tour />
                        <LatestBlog />
                    </Pages>
                </>
        );
    }
}

export default Home;