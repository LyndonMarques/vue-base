import store from '@/store'
import * as _ from 'lodash'

export default (to, from, next) => {
  if (store.getters['auth/IS_TRADE'] || store.getters['auth/IS_ADMIN']) {
    return next('/servicos/')
  }

  if (store.getters['auth/IS_FINANCIAL']) {
    return next('/relatorios/')
  }

  next()
};
