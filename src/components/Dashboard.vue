<template>
  <div id="burger-table">
    <Message :msg="data.message" v-show="data.message" />
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
      <div id="burger-table-rows">
        <div
          class="burger-table-row"
          v-for="burger in data.burgers"
          :key="burger.id"
        >
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">
                {{ opcional }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
              @change="updateBurger($event, burger.id)"
            >
              <option value="">Selecione</option>
              <option
                v-for="status in data.status"
                :key="status.id"
                :value="status.tipo"
                :selected="burger.status == status.tipo"
              >
                {{ status.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import Message from "../components/Message.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Message,
  },
  setup() {
    onMounted(() => {
      getPedidos();
    });

    const data = reactive({
      burgers: null,
      burger_id: null,
      status: [],
      message: "",
    });

    async function getPedidos() {
      const request = await fetch("http://localhost:3000/burgers");

      const response = await request.json();

      data.burgers = response;

      getStatus();
    }

    async function getStatus() {
      const request = await fetch("http://localhost:3000/status");

      const response = await request.json();

      data.status = response;
    }

    async function deleteBurger(burgerId: number) {
      const request = await fetch(`http://localhost:3000/burgers/${burgerId}`, {
        method: "DELETE",
      });

      const response = await request.json();

      data.message = `Pedido Nº ${response.id} apagado com sucesso`;

      setTimeout(() => (data.message = ""), 3000);

      getPedidos();
    }

    async function updateBurger(e: any, id: number) {
      const optionSelected = e.target.value
      const dataJson = JSON.stringify({ status: optionSelected });

      const request = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: dataJson
      })

      const response = await request.json();
      console.log(response);

      data.message = `Pedido Nº ${response.id} foi atualizado para ${response.status}`;

      setTimeout(() => (data.message = ""), 3000);
    }

    return {
      data,
      deleteBurger,
      updateBurger,
    };
  },
});
</script>
<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
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

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>