<template>
  <div id="nav">
    <router-link to="home" id="logo_url">
      <img id="logo" :src="props.logo" :alt="props.alt" />
    </router-link>
    <router-link to="home">Home</router-link>
    <router-link to="pedidos">Pedidos</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {
    logo: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style scoped>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo_url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 40px;
  height: 40px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover{
  color: #fff;
}
</style>
