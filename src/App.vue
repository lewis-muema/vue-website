<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <!--because this / path is the first on to be accessed when first loading the url that component will be the first to be loaded-->
      <router-link to="/about">About</router-link> |
      <router-link to="/vue">Vue</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Open sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;

}
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Open sans:900');
@import url('https://fonts.googleapis.com/css?family=Open sans:800');
@import url('https://fonts.googleapis.com/css?family=Open sans:700');
@import url('https://fonts.googleapis.com/css?family=Open sans:600');
@import url('https://fonts.googleapis.com/css?family=Open sans:500');
@import url('https://fonts.googleapis.com/css?family=Open sans:400');
@import url('https://fonts.googleapis.com/css?family=Open sans:300');
@import url('https://fonts.googleapis.com/css?family=Open sans:200');
@import url('https://fonts.googleapis.com/css?family=Open sans:100');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
</style>
