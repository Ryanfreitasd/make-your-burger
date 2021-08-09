<template>
  <div class="message-container">
    <p>{{props.msg}}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Message',
  props: {
    msg: String
  },
  setup(props) {
    return {
      props
    }
  },
})
</script>
<style scoped>
  .message-container {
    color: #004085;
    background-color: #cce5ff;
    border: 2px solid #b8daff;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
  }
</style>
