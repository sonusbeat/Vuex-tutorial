<template>
  <div class="about">
    <figure>
      <img alt="Vue logo" src="../assets/logo.png">
    </figure>
    <h2 class="darkGreen">About</h2>
    <input type="text" v-model="text">

    <h3 v-if="text">{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      text: ""
    }
  },
}
</script>
