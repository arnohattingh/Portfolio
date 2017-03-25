<template>
  <div>
    <h1>Single Post</h1>
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
    <router-link :to="'/posts'">Back to Posts</router-link>
  </div>
</template>

<script>
export default {
}
</script>
