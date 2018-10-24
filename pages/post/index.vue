<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li 
        v-for="(post, index) in posts" 
        :key="index"
      >
        <nuxt-link :to="'post/'+post.id">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return { posts: data.slice(0, 5) }
  }
}
</script>

<style scoped>
.container {
  width: 50%;
  padding-top: 100px;
  margin: auto;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 50px;
}
ul li {
  border: 1px #ddd solid;
  padding: 50px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>

