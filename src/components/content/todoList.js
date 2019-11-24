import React from 'react';
import SiderLayout from '../layout/SiderLayout'
import HeaderContent from './Header'
import ContentLayout from './contentLayout'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class TodoList extends React.Component{

	render(){
		 return(
        <div>
            <Layout>
              <Sider><SiderLayout/></Sider>
              <Layout>
                <Header><HeaderContent bucketId={this.props.match.params.id}/></Header> 
                <Content><ContentLayout bucketId={this.props.match.params.id}/></Content>
              </Layout>
            </Layout>
        </div>
      )
  }
}

export default TodoList;
