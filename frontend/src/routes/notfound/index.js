import React from 'react'
import { Link } from 'dva/router'
import styles from './index.less'

const NotFound = () => <div className={styles['page-404']}>
  <section>
    <h1>404</h1>
    <p>你要找的页面不存在 <Link to='/'>返回首页</Link></p>
  </section>
</div>

export default NotFound
