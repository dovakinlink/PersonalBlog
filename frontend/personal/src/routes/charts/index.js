import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import classnames from 'classnames';
import * as airportConfig from './airportConfig';
import styles from './charts.less';

require('echarts/map/js/china.js');

class Charts extends React.Component {

  componentDidMount() {
  }

  onChartClick = () => {
    message.info('chart click');
  }

  render() {

    const { charts } = this.props;
    const { options } = charts;

    const onEvents = {
      click: this.onChartClick
    }

    const reStyle = {
      width: '100%',
      height: '220px'
    }

    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>Echarts For React</h1>
            <h2>baidu Echarts(v3.0) components for React wrapper, please see the <a href="https://github.com/hustcc/echarts-for-react" target="_blank">doc</a>.</h2>
          </Col>
        </Row>
        <Row gutter={16} className={styles.showcase}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 30 }}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.yellow]: true})}>
                <h4>Simple Demo</h4>
              </div>}>
              <ReactEcharts
                option={options.sdoption}
                style={reStyle} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 30 }}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                <h4>Echarts events</h4>
              </div>}>
              <ReactEcharts
                option={options.eeoption}
                onEvents={onEvents}
                style={reStyle} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: 30 }}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.blue]: true})}>
                <h4>Echarts API</h4>
              </div>}>
              <ReactEcharts
                option={options.eaoption}
                style={reStyle} />
            </Card>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col span={24}>
            <Card
              bordered={false}
              noHovering>
              <ReactEcharts
                option={options.tcoption}
                style={reStyle} />
            </Card>
          </Col>
        </Row>
        <Row gutter={32} className={styles.showcase}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ marginBottom: 30 }}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.green]: true})}>
                <h4>Airport</h4>
              </div>}>
              <ReactEcharts
                option={airportConfig.getOption}
                style={{height: '600px', width: '100%'}} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.red2]: true})}>
                <h4>Gauge</h4>
              </div>}>
              <ReactEcharts
                option={options.gaugeoption}
                style={{height: '600px', width: '100%'}} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Charts.propTypes = {};

export default connect(({ charts }) => ({ charts }))(Charts);
