<template>
  <div class="container">
    <h1>Count</h1>
    <p>count is {{ this.$store.state.count }}</p>
    <div>
      <el-button 
        type="primary" 
        @click="handleAdd"
      >
        +1
      </el-button>
      <el-button 
        type="primary" 
        @click="handleDelete"
      >
        -1
      </el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      message: 0
    }
  },
  methods: {
    handleAdd() {
      this.$store.dispatch('increment')
    },
    handleDelete() {
      this.$store.dispatch('decrement')
    }
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
</style>

