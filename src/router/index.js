import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Auth from 'components/Auth.vue'
import AuthSuccess from 'components/AuthSuccess.vue'
import Posts from 'components/posts/Posts'
import PostsList from 'components/posts/PostsList'
import PostsSingle from 'components/posts/PostsSingle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/success',
      component: AuthSuccess
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        { path: '', name: 'PostsList', component: PostsList },
        { path: ':id', name: 'PostsSingle', component: PostsSingle }
      ]
    },
    /* this is the 404 path */
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
