import React from 'react'
import './style.scss';
import Pages from '../../Components/HOC/Page/index'

class Home extends React.Component{
    render() {
        return(
                <>
                        <Pages
                           showHeader
                        >

                        </Pages>
                </>
        );
    }
}

export default Home;