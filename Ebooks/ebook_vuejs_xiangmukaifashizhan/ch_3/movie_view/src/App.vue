<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <p>this is test p</p>
    <table border="1">
      <tr>
        <td>d1</td>
        <td>d2</td>
      </tr>
    </table>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
