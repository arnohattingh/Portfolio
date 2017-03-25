<template>
  <div>
    <div v-for="post in posts.reverse()">
      <h1>{{ post.title }}</h1>
      <strong>{{ post.id }} - {{ post.desc }}</strong>
      <router-link :to="'/posts/' + post.id">Post {{ post.id }}</router-link>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyBLqSTbFW7W9x2uPcGCsQC1MCfhQZUIu68',
  authDomain: 'portfolio-d4d33.firebaseapp.com',
  databaseURL: 'https://portfolio-d4d33.firebaseio.com',
  storageBucket: 'portfolio-d4d33.appspot.com',
  messagingSenderId: '738113106641'
}

let app = Firebase.initializeApp(firebaseConfig)
let db = app.database()
let postsRef = db.ref('posts')

export default {
  firebase: {
    posts: postsRef
  },
  method: {
    post: postsRef.orderByChild('id').equalTo(1).on('value', function (snapshot) {
      console.log(snapshot)
    })
  }
}
</script>
