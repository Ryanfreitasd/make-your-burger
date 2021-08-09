<template>
  <div id="footer">
    <p>Make Your Burger &copy; 2021</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:"Footer",
  setup() {
    
  },
})
</script>

<style scoped>
  #footer {
    height: 200px;
    background-color: #222;
    border-top: 4px solid #111;
    color: #FCBA03;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    width: 100%;
  }
</style>
