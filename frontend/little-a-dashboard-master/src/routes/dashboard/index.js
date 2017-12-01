import React, { PropTypes } from 'react'
import { connect } from 'dva'
import FigureCard from './figurecard'
import ImageCard from './imagecard'
// import MapCard from './mapcard'

class Dashboard extends React.Component {
  render () {
    const { dashboard } = this.props
    const { figurecard, imagecard } = dashboard

    const figurecardProps = {
      figurecard
    }
    const imagecardProps = {
      imagecard
    }

    return (
      <div>
        <FigureCard {...figurecardProps} />
        <ImageCard {...imagecardProps} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
