// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'

let firebaseConfig = {
  apiKey: 'AIzaSyBLqSTbFW7W9x2uPcGCsQC1MCfhQZUIu68',
  authDomain: 'portfolio-d4d33.firebaseapp.com',
  databaseURL: 'https://portfolio-d4d33.firebaseio.com',
  storageBucket: 'portfolio-d4d33.appspot.com',
  messagingSenderId: '738113106641'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  created () {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
    })
  }
})
