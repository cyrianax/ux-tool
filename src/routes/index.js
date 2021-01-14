import {createRouter, createWebHashHistory} from 'vue-router'

import Main from '/src/views/Main/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Main
    },
  ]
})

router.beforeEach(async (to, from) => {
  return true
})

export default router
  