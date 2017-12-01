import React from 'react'
import classnames from 'classnames'
import { Icon, Popover, Badge, Avatar, Input } from 'antd'
import Menus from './menus'
import styles from './layout.less'

class Header extends React.Component {
  render () {
    const {
      fullScreen,
      sidebarFold,
      onLock,
      onFull,
      onExitFull,
      onLogout,
      onSwitchSidebar,
      siderRespons,
      menuResponsVisible,
      onSwitchMenuPopover } = this.props

    const msgContent = (
      <div>
        <p><a>Mike responded to your email</a></p>
        <p><a>You have 5 new tasks</a></p>
        <p><a>Another</a></p>
      </div>
    )

    const searchStyle = {
      width: 150,
      background: '0 0',
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderRadius: '2px'
    }

    const memusProps = {
      onMenuClick () {
        if (siderRespons) {
          onSwitchMenuPopover()
        }
      }
    }

    const popoverStyle = {
      fontSize: 12
    }

    const avatarStyle = {
      backgroundColor: '#555555'
    }

    return (
      <navbar-cmp>
        <nav className={classnames(styles.navbar, styles['navbar-transparent'], styles['navbar-absolute'])}>
          <div className={styles['navbar-container']}>
            {
              // Responsive Sidebar
              siderRespons
                ? <Popover
                  placement='bottomLeft'
                  onVisibleChange={onSwitchMenuPopover}
                  visible={menuResponsVisible}
                  trigger='click'
                  content={<Menus {...memusProps} />}
                  overlayClassName={styles.popmenu}>
                  <div className={styles.btn}><Icon type='bars' /></div>
                </Popover>
                : <div className={styles.btn} onClick={onSwitchSidebar}>
                  <Icon type={sidebarFold ? 'menu-unfold' : 'menu-fold'} />
                </div>
            }
            <ul className={styles['navbar-right']}>
              <li>
                <Input placeholder='Search' style={searchStyle} />
              </li>
              <li>
                <a onClick={!fullScreen ? () => onFull(document.documentElement) : onExitFull}>
                  <Avatar size='small' icon={fullScreen ? 'shrink' : 'arrows-alt'} style={avatarStyle} />
                </a>
              </li>
              <li>
                <a>
                  <Popover overlayStyle={popoverStyle} content={msgContent} placement='bottomRight' title='3 unread message'>
                    <Badge count={3}>
                      <Avatar size='small' icon='notification' style={avatarStyle} />
                    </Badge>
                  </Popover>
                </a>
              </li>
              <li>
                <a>
                  <Popover overlayStyle={popoverStyle} content={<div><a onClick={onLogout}>Sign out</a></div>} placement='bottomRight' trigger='click'>
                    <Avatar size='small' icon='user' style={avatarStyle} />
                  </Popover>
                </a>
              </li>
              <li>
                <a onClick={onLock}>
                  <Avatar size='small' icon='unlock' style={avatarStyle} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </navbar-cmp>
    )
  }
}

export default Header
