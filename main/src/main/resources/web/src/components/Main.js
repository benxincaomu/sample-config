import React from 'react'
import {Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Modal } from 'antd'
import $ from 'jquery';
import JqueryUtil from "../components/commons/utils/JqueryUtil"
import createBrowserHistory from 'history/createBrowserHistory'
import Users from "./user/Users";
import Login from "./home/Login"
import Roles from "./user/Roles"


const history = createBrowserHistory()
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            permissions:[]
        }
    }

    loginSuCallback() {
        this.setState({ isLogin: true });
        window.location.reload();
    }
    notLoginTodo() {
        this.setState({ isLogin: false });
    }
    componentWillMount() {
        JqueryUtil.extendJquery(this.notLoginTodo.bind(this));
        
    }

    render() {
        return (
            <Router history={history}>
                <div className='index'>

                    <Layout>
                        <Header className='header'>
                            <div className='logo' />
                        </Header>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                {/* 菜单从服务器获取 */}
                                <Menu 
                                    mode='inline'
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ minHeight: '70%' }}>
                                    <SubMenu key='sub1' title={
                                        <span><Icon type="user" />菜单</span>
                                    }>
                                        <Menu.Item key="/users">
                                            <Link to="/users">用户管理</Link>
                                        </Menu.Item>
                                        <Menu.Item key='/roles'>
                                            <Link to="/roles">角色管理</Link>
                                    </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                <Route exact path="/users" component={Users} />
                                <Route exact path="/roles" component={Roles} />
                            </Content>

                        </Layout>
                        <Footer> footer</Footer>
                    </Layout>
                    <Modal title="登陆" closable={false} visible={!this.state.isLogin} footer={null}><Login success={this.loginSuCallback.bind(this)}/></Modal>
                </div>
            </Router>
        )
    }
}
//定义属性的类型
AppComponent.propTypes = {
   
};
//定义默认的属性
AppComponent.defaultProps = {};

export default AppComponent
