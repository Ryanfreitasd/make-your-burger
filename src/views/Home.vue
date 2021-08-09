<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu burguer:</h1>
    <BurgerForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    Banner,
    BurgerForm,
  },
  setup() {},
});
</script>
