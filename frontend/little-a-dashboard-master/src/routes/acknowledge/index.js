import React from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Icon } from 'antd'
import styles from './acknow.less'
import data from './data'

class Acknowledge extends React.Component {
  render () {
    const { app } = this.props
    const { sidebarBgColor } = app

    const getColor = (bgColor) => {
      switch (bgColor) {
        case 'red':
          return '#d80b0b'
        case 'black':
          return '#000'
        case 'yellow':
          return '#ff9800'
        case 'blue':
          return '#1e90ff'
        default:
          return '#108ee9'
      }
    }

    const aStyle = {
      color: getColor(sidebarBgColor)
    }

    return (
      <div style={{ padding: '0 50px' }}>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>Acknowledge</h1>
          </Col>
        </Row>
        <Row gutter={32} className={styles.showcase}>
          {
            data && data.length > 0
            ? data.map((v) => {
              return <Col key={v.id} xs={24} sm={24} md={12} lg={6} xl={6} style={{ marginBottom: 30 }}>
                <Card bordered={false} noHovering>
                  <h2 title={v.title}>{v.title.length > 10 ? v && v.title.substring(0, 10) + '...' : v.title}</h2>
                  <div className={styles.icon}>
                    <a href={v && v.href} style={aStyle} target='_blank'><Icon type={v && v.icon} /></a>
                  </div>
                </Card>
              </Col>
            })
            : ''
          }
        </Row>
      </div>
    )
  }
}

export default connect(({ app }) => ({ app }))(Acknowledge)
