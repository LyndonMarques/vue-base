import store from '@/store'
import * as _ from 'lodash'

export default (to, from, next) => {
  if (!_.isUndefined(to.meta.trade) && to.meta.trade && store.getters['auth/IS_TRADE']) {
    return next()
  }

  if (!_.isUndefined(to.meta.financial) && to.meta.financial && store.getters['auth/IS_FINANCIAL']) {
    return next()
  }

  if (store.getters['auth/IS_ADMIN']) {
    return next()
  }

  next('/home/')
};
