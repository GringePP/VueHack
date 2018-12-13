<template>
  <div class="counter">
    counter num: {{ $store.state.counter.count }}
    <button @click="increaseFun">+</button>
    <button @click="decreaseFun">-</button>
    <span>--------------</span>
    counter2 num: {{ $store.state.counter.count }}
    <button @click="increaseFun1">+</button>
    <button @click="decreaseFun2">-</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'counter',
  data () {
    return {
      msg: 'counter'
    }
  },
  methods: {
    ...mapActions({
      increaseFun: 'increase',
      decreaseFun: 'decrease',
      increaseFun1: 'increase',
      decreaseFun2: 'decrease',
    })
  }
}
</script>

<style scoped>
</style>
