import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

const SubMenu = Menu.SubMenu

class Menus extends React.Component {

  getMenuSelectedKey = (routes) => {
    if (routes === undefined ) return ''
    let gn = '';
    for (let i = routes.length - 1; i >= 0; i--) {
      const obj = routes[i];
      if ('path' in obj) {
        gn = obj.path;
        break;
      }
    }
    return gn;
  }

  render () {
    const { sidebarFold, onMenuClick, routes } = this.props
    const menukey = this.getMenuSelectedKey(routes);

    return (
      <Menu mode={sidebarFold ? 'vertical' : 'inline'} theme='light' onClick={onMenuClick} selectedKeys={Array.of(menukey)}>
        <Menu.Item key='home'>
          <Link to='/home'>
            <Icon type='appstore-o' />控制台
          </Link>
        </Menu.Item>
        <SubMenu key='manage' title={<span><Icon type='bars'/>模块</span>}>
          <Menu.Item key='article'>
            <Link to='/article' style={{color: '#999'}}>
              文章
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='user_manager' title={<span><Icon type='bars'/>用户</span>}>
          <Menu.Item key='user_new'>
            <Link to='/user' style={{color: '#999'}}>
              用户新增
            </Link>
          </Menu.Item>
          <Menu.Item key='user_list'>
            <Link to='/article' style={{color: '#999'}}>
              用户管理
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='setting'>
          <Link to='/setting'>
            <Icon type='setting' />个性化
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Menus
