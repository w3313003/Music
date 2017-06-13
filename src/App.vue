<template>
  <div id="app">
   		 <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.toggle-enter-active,
.toggle-leave-active{
	transition: all 1s;
}
.toggle-enter,
.toggle-leave-active{
	opacity: 0;
	transform: translateX(-100%);
}
</style>
