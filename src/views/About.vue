<template>
    <div>
        <h3>this is About</h3>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'about',
  store,
  data () {
    return {
      msg: store.state.count
    }
  }
}
</script>
<style scoped>

</style>
