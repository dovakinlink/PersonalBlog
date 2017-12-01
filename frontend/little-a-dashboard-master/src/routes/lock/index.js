import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Input } from 'antd'
import { config } from 'utils'
import styles from './lock.less'

const Lock = ({
  dispatch
}) => {
  function handleUnLock () {
    dispatch({ type: 'app/unlock' })
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          <span>Richardson</span>
        </div>
        <Row style={{ textAlign: 'center' }}>
          <Input size='large' placeholder='Enter Password' type='password' />
          <Button type='dashed' ghost size='large' onClick={handleUnLock}>UNLOCK</Button>
        </Row>
      </div>
    </div>
  )
}

Lock.propTypes = {
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({ app }) => ({ app }))(Lock)
