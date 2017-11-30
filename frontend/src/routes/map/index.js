import React from 'react'
import { Col, Row } from 'antd'
import GoogleMap from 'google-map-react'
import styles from './map.less'

const K_WIDTH = 40
const K_HEIGHT = 40

function createMapOptions (maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  }
}

class GoogleMaps extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [22.229184, 113.558653],
      zoom: 13,
      greatPlaceCoords: {lat: 22.230088, lng: 113.550173}
    }
  }

  render () {
    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>Google Map React</h1>
            <h2>universal google map react component, allows render react components on the google map, For more detail, please see <a href='https://github.com/istarkov/google-map-react' target='_blank'>doc</a>.</h2>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col>
            <GoogleMap
              style={{ width: '100%', height: '100%' }}
              center={this.state.center}
              zoom={this.state.zoom}
              options={createMapOptions}>
              <MyGreatPlace lat={22.221991} lng={113.560737} text={'A'} />
              <MyGreatPlace {...this.state.greatPlaceCoords} text={'B'} />
            </GoogleMap>
          </Col>
        </Row>
      </div>
    )
  }
}

class MyGreatPlace extends React.Component {
  render () {
    const greatPlaceStyle = {
      position: 'absolute',
      width: K_WIDTH - 5,
      height: K_HEIGHT - 5,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,
      border: '3px solid #49a9ee',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#999',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 5
    }

    return (
      <div style={greatPlaceStyle}>
        {this.props.text}
      </div>
    )
  }
}

export default GoogleMaps
