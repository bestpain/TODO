import React from 'react';
import HeaderContent from '../content/Header'
import SiderLayout from './SiderLayout'
import { Layout } from 'antd';

const { Header, Sider } = Layout;

const homePage=()=>{
  return(
    <div>
        <Layout>
          <Sider><SiderLayout/></Sider>
          <Layout>
            <Header><HeaderContent /></Header>      
          </Layout>
        </Layout>
    </div>
  )
}

export default homePage ; 