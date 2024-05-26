<template>
  <h1>Counter App with Vuex</h1>
  <div class="counter">
    <button class="button decrement" v-on:click="decrementCounter">+</button>
    <div class="counter-value">{{ counter }}</div>
    <button class="button increment" v-on:click="incrementCounter">+</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["incrementCounter", "decrementCounter"]),
  },
  computed: {
    ...mapGetters(["counter"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.counter {
  display: flex;
  align-content: center;
  justify-content: center;
}
.counter-value {
  color: aqua;
  font-size: 50px;
  margin: 20px;
  align-content: center;
  align-self: center;
  align-items: center;
}
.button {
  width: 60px;
  height: 60px;
}
.increment {
  color: grey;
}
.decrement {
  color: green;
}
</style>
