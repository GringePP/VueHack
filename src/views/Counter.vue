<template>
  <div class="counter">
    counter num: {{ $store.state.counter.count }}
    <button @click="increaseFun">+</button>
    <button @click="decreaseFun">-</button>
    <span>-----------------</span>
    counter2 num: {{ $store.state.counter.count }}
    <button @click="increaseFun1">+</button>
    <button @click="decreaseFun2">-</button>





    <vSwitch :value="value" :FId="FId" :index="index" class="vswitch" @changeSwitch="changeSwitch"></vSwitch>
  </div>
</template>

<script>
import vSwitch from './Switch.vue'
import {mapActions} from 'vuex'

export default {
  components: { vSwitch },
  name: 'counter',
  data () {
    return {
      msg: 'counter',
      value: false,
      FId: '123',
      index: 0,
    }
  },
  methods: {
    ...mapActions({
      increaseFun: 'increase',
      decreaseFun: 'decrease',
      increaseFun1: 'increase',
      decreaseFun2: 'decrease',
    }),
    changeSwitch(checked,id,index){
      console.log(index)
    }
  }
}
</script>

<style scoped>
</style>
