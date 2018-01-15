import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/login'))
          cb(null, { component: require('./routes/login/') })
        }, 'login')
      },
      childRoutes: [
        {
          path: 'home',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/home'))
              cb(null, require('./routes/home/'))
            }, 'home')
          }
        },
        {
          path: 'article',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/article'))
              cb(null, require('./routes/article/'))
            }, 'article')
          }
        },
        {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/user'))
              cb(null, require('./routes/user/'))
            }, 'user')
          }
        },
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/dashboard/'))
            }, 'dashboard')
          }
        },
        {
          path: 'profile',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/profile'))
              cb(null, require('./routes/userprofile/'))
            }, 'userprofile')
          }
        },
        {
          path: 'setting',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/setting/'))
            }, 'setting')
          }
        },
        {
          path: 'acknowledge',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/acknowledge/'))
            }, 'acknowledge')
          }
        },
        {
          path: 'alert',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/sweetalert/'))
            }, 'sweetalert')
          }
        },
        {
          path: 'table',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/table'))
              cb(null, require('./routes/table/'))
            }, 'antdtable')
          }
        },
        {
          path: 'editor',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/editor'))
              cb(null, require('./routes/editor/'))
            }, 'editor')
          }
        },
        {
          path: 'map',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/map/'))
            }, 'googleMap')
          }
        },
        {
          path: 'grid',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/grid/'))
            }, 'antdGrid')
          }
        },
        {
          path: 'charts',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/charts'))
              cb(null, require('./routes/charts/'))
            }, 'charts')
          }
        }
      ]
    },
    {
      path: 'login',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/login'))
          cb(null, require('./routes/login/'))
        }, 'login')
      }
    },
    {
      path: 'lock',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/app'))
          cb(null, require('./routes/lock/'))
        }, 'lock')
      }
    },
    {
      path: '*',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/notfound/'))
        }, 'notfound')
      }
    }
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

export default Routers
