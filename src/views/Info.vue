<template>
  <div>
    this is info
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'info',
  store,
  methods: {
    add () {
      console.log('add event for info')
      store.commit('increase')
    }
  }
}
</script>
<style scoped>
</style>
