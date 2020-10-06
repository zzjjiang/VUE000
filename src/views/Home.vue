<template>
    <div>
      <h3>this is Home</h3>
      <ul>
        <li v-for="(item,index) in lists" :key="index" @click="choose(index)" :class="{active:index==current&&current!==''}">
          {{ item }}
        </li>
      </ul>
      <button @click="add()">添加</button>
      <ul>
        <li v-for="(item,index) in targets" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      current: '',
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targets: []
    }
  },
  methods: {
    choose (index) {
      this.current = index
    },
    add () {
      if (this.current === '') { return }
      this.targets.push(this.lists[this.current])
      this.current = ''
    }
  }
}
</script>

<style>
li.active {
  background: green;
}
</style>
