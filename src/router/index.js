import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
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
