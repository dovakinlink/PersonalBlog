import React from 'react'
import classnames from 'classnames'
import { Row, Col, Card, Icon } from 'antd'
import CountUp from 'react-countup'
import styles from './figurecard.less'

class FigureCard extends React.Component {
  render () {
    const { figurecard } = this.props

    return (
      <div>
        <Row gutter={16} className={styles.showcase}>
          {
            figurecard.map((v, k) => {
              return (
                <Col xs={24} sm={24} md={12} lg={6} xl={6} key={k} style={{ marginBottom: 30 }}>
                  <Card
                    title={
                      <div>
                        <div className={classnames(styles['card-header'], {[styles[v.color]]: true})}>
                          <h4><Icon type={v.icon} /></h4>
                        </div>
                        <div className={styles['card-content']}>
                          <p className={styles.category}>{v.title}</p>
                          <h3>
                            <CountUp
                              start={0}
                              end={v.number}
                              duration={2.75}
                              useEasing
                              useGrouping
                              separator=','
                          />
                          </h3>
                        </div>
                      </div>}
                    bordered={false}
                    noHovering>
                    <div className={styles['card-footer']}>
                      <Icon type={v.subIcon} />
                      {' '}{v.sub}
                    </div>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

FigureCard.propTypes = {}

export default FigureCard
