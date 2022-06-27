<script setup>
import Pie from './components/Pie.vue'
</script>

<template>
  <div class="container">
    <div class="left">
      <Pie />
    </div>
    <div class="right">
      <lay-button
        type="primary"
        size="lg"
        @click="$store.commit('toggleDarkMode')"
        >toggle darkMode</lay-button
      >
    </div>
  </div>
</template>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;

  .left {
    width: 50%;
    margin-right: 10px;
  }

  .right {
    width: 50%;
    margin-left: 10px;
  }
}
</style>
