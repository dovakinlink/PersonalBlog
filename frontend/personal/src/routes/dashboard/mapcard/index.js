import React from 'react'
import classnames from 'classnames'
import ReactEcharts from 'echarts-for-react'
import { Row, Col, Card, Icon } from 'antd'
import * as mapConfig from './mapConfig'
import styles from './mapcard.less'

require('echarts/map/js/world.js')

class ImageCard extends React.Component {
  render () {
    return (
      <div>
        <Row className={styles.showcase}>
          <Col span={24}>
            <Card title={<div className={classnames(styles['card-header'], {[styles.yellow]: true})}>
              <h4><Icon type='global' /></h4>
            </div>} bordered={false} noHovering>
              <ReactEcharts
                option={mapConfig.getOption}
                style={{height: '600px', width: '100%'}} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

ImageCard.propTypes = {}

export default ImageCard
