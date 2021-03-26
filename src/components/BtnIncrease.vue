<template>
  <button @click="increaseAction(200)">Aumentar</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "BtnIncrease",
  methods: {
    ...mapActions(['increaseAction'])
  }
}
</script>