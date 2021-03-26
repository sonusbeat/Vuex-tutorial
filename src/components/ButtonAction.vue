<template>
  <button @click="buttonAction({ state: state, number: number })">
    {{ btnText }}
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ButtonAction",
  props: {
    state: Boolean,
    number: {
      type: Number,
      default: 1
    }
  },
  computed: {
    btnText() {
      return this.state ? "Aumentar" : "Disminuir";
    }
  },
  methods: {
    ...mapActions(['buttonAction'])
  }
}
</script>