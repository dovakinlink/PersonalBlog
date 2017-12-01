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
          <img alt={'logo'} src={config.logo} width="30%" height="30%" />
          <span>Dovakin!</span>
        </div>
        <Row style={{ textAlign: 'center' }}>
          <Input size='large' placeholder='输入密码以解锁' type='password' />
          <Button type='dashed' ghost size='large' onClick={handleUnLock}>解锁</Button>
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
