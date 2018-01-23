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
          path: 'articleeditor',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/articleeditor'))
              cb(null, require('./routes/articleeditor/'))
            }, 'articleeditor')
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
          path: 'usermanager',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/usermanager'))
              cb(null, require('./routes/usermanager/'))
            }, 'usermanager')
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
        // {
        //   path: 'editor',
        //   getComponent (nextState, cb) {
        //     require.ensure([], (require) => {
        //       registerModel(app, require('./models/editor'))
        //       cb(null, require('./routes/editor/'))
        //     }, 'editor')
        //   }
        // },
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
