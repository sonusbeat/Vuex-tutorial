<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
$green: #42b983;
$darkGreen: #2c3e50;
$red: crimson;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkGreen;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $darkGreen;
    text-decoration: none;

    &.router-link-exact-active {
      color: $green;
    }
  }
}

.green {
  color: $green;
}

.darkGreen {
  color: $darkGreen;
}

.red {
  color: $red;
}
</style>
