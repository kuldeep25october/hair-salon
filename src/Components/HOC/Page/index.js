import { Layout } from 'antd'
import React from 'react'
import Header from '../../Molecules/Header/index'


const Content = Layout
const Pages = (props) =>{
    return(
        <>
            <Layout>
                {
                        props.showHeader &&
                        <Header />
                }
                    <Content>
                            {
                                props.children
                            }
                    </Content>
                {

                }
            </Layout>
        </>
    )
}
export default Pages;