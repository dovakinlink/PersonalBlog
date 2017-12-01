import React from 'react'
import classnames from 'classnames'
import { Card, Col, Row } from 'antd'
import styles from './grid.less'

class GridSystem extends React.Component {
  render () {
    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>Antd Grid System</h1>
            <h2>24 Grids System.</h2>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col span={24} id='components-grid-demo-basic'>
            <Card title={<div className={classnames(styles['card-header'], {[styles.yellow]: true})}>
              <h4>Base Grid</h4>
            </div>} bordered={false} noHovering>
              <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
              </Row>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
              </Row>
              <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col span={24} id='components-grid-demo-gutter'>
            <Card title={<div className={classnames(styles['card-header'], {[styles.pink]: true})}>
              <h4>Grid Gutter</h4>
            </div>} bordered={false} noHovering>
              <Row gutter={16}>
                <Col className='gutter-row' span={6}>
                  <div className='gutter-box'>col-6</div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div className='gutter-box'>col-6</div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div className='gutter-box'>col-6</div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div className='gutter-box'>col-6</div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col span={24} id='components-grid-demo-flex'>
            <Card title={<div className={classnames(styles['card-header'], {[styles.green]: true})}>
              <h4>Flex Layout</h4>
            </div>} bordered={false} noHovering>
              <p>sub-element align left</p>
              <Row type='flex' justify='start'>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align center</p>
              <Row type='flex' justify='center'>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align right</p>
              <Row type='flex' justify='end'>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element monospaced arrangement</p>
              <Row type='flex' justify='space-between'>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align full</p>
              <Row type='flex' justify='space-around'>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

GridSystem.propTypes = {}

export default GridSystem
