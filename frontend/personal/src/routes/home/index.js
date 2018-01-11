import { PropTypes } from 'react'
import { connect } from 'dva'

class Home extends React.Component {
    render() {
        const { home } = this.props
        return(
            <div>
                
            </div>
        )
    }
}

Home.protoTypes = {
    home: PropTypes.object
}

export default connect(({ home }) => ({ home }))(Home)