<template lang="html"> 
  <div> 
    <h1>Signup succeeded</h1> 
    <button @click='logOut'>Log out</button> 
    <hr> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <p>{{userId}}</p> 
    <hr>
    <p>{{user}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      userId: '',
      name: '',
      email: ''
    }
  },
  created () {
    var vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user
        vm.name = vm.user.displayName
        vm.email = vm.user.email
        vm.userID = vm.user.uid
      }
    })
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
    }
  }
}

</script>
