import React, { Component } from 'react'
import { Menu,Layout } from 'element-react'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div class="home_wrap">
                <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" >
                    <span>xxxx公司</span>
                    <Menu.Item index="1">xxxx公司</Menu.Item>
                    
                  
                </Menu>
                <Layout.Row className="tac">
                    <Layout.Col span={8}>                     
                        <Menu defaultActive="0" className="el-menu-vertical-demo"  uniqueOpened={true}>
                        <Menu.Item index="0"><i className="el-icon-menu"></i>首页</Menu.Item>
                            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>内容管理</span>}>
                                    <Menu.Item index="1-1">发表文章</Menu.Item>
                                    <Menu.Item index="1-2">内容列表</Menu.Item>
                                    <Menu.Item index="1-2">评论列表</Menu.Item>
                                    <Menu.Item index="1-2">素材管理</Menu.Item>                              
                            </Menu.SubMenu>
                            <Menu.SubMenu index="2" title={<span><i className="el-icon-message"></i>粉丝管理</span>}>
                                    <Menu.Item index="2-1">粉丝概况</Menu.Item>
                                    <Menu.Item index="2-2">粉丝画像</Menu.Item>
                                    <Menu.Item index="2-2">粉丝列表</Menu.Item>                            
                            </Menu.SubMenu>
                            <Menu.Item index="3"><i className="el-icon-menu"></i>账户信息</Menu.Item>
                      
                        </Menu>
                    </Layout.Col>
              
                       
                </Layout.Row>
            </div>
        )
    }
}
export default Home