import Trial from './components/Trial'
import Search from './components/Search'
import VueRouter from "vue-router";

const routes = [
    { path: '/', component: Search },
    { path: '/trial/:id', component: Trial },
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;
