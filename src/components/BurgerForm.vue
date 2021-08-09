<template>
  <div>
    <Message :msg="data.message" v-show="data.message"/>
    <div>
      <form id="burger-form" @submit.prevent="createBurger">
        <div class="input-container">
          <label for="nome">Nome do Cliente: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="data.nome"
            placeholder="Digite o seu nome"
          />
        </div>
        <div class="input-container">
          <label for="pao">Escolha o pão: </label>
          <select name="pao" v-model="data.pao">
            <option value="">Selecione o pão</option>
            <option v-for="pao in data.paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha a carne do seu burger: </label>
          <select name="carne" v-model="data.carne">
            <option value="">Selecione a carne</option>
            <option
              v-for="carne in data.carnes"
              :key="carne.id"
              :value="carne.tipo"
            >
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container" id="opcionais-container">
          <label id="opcionais-title" for="opcionais"
            >Selecione os opcionais:
          </label>
          <div
            class="checkbox-container"
            v-for="opcional in data.opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="data.opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu burger" />
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import Message from '../components/Message.vue'

export default defineComponent({
  name: "BurgerForm",
  components: {
    Message
  },
  setup() {
    onMounted(() => {
      getIngredientes();
    });

    const data = reactive({
      paes: {},
      carnes: {},
      opcionaisdata: {},
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      message: '',
    });

    async function getIngredientes() {
      const request = await fetch("http://localhost:3000/ingredientes");
      const response = await request.json();

      data.paes = response.paes;
      data.carnes = response.carnes;
      data.opcionaisdata = response.opcionais;
    }

    async function createBurger() {
      const submit = {
        nome: data.pao,
        carne: data.carne,
        opcionais: Array.from(data.opcionais),
        status: "Solicitado",
      };

      const dataJson = JSON.stringify(submit);

      const request = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const response = await request.json();

      data.message = `Pedido Nº ${response.id} realizado com sucesso`;

      setTimeout(() => data.message = '', 3000);

      data.nome = null;
      data.pao = null;
      data.carne = null;
      data.opcionais = [];
    }

    return {
      data,
      createBurger,
    };
  },
});
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>