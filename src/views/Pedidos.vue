<template>
  <div class="main-container">
    <h1>Gerenciar Pedidos: </h1>
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from '../components/Dashboard.vue'

export default defineComponent({
  name: 'Pedidos',
  components: {Dashboard},
  setup() {
    
  },
})
</script>
