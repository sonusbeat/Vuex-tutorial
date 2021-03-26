<template>
  <div class="home">
    <figure>
      <img alt="Vue logo" src="../assets/logo.png">
    </figure>

    <h2>
      <span class="darkGreen">{{ title }}:</span>&nbsp;
      <span :class="counterColor">$ {{ counter }}</span>
    </h2>

    <div><BtnIncrease />&nbsp;<BtnDecrease /></div><br>

    <hr>
    <div>
      <ButtonAction :state="true" :number="100" />&nbsp;
      <ButtonAction :state="false" :number="100" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BtnIncrease from "@/components/BtnIncrease";
import BtnDecrease from "@/components/BtnDecrease";
import ButtonAction from "@/components/ButtonAction";

export default {
  name: 'Home',
  components: {
    BtnIncrease,
    BtnDecrease,
    ButtonAction
  },
  data() {
    return {
      title: "Contador Vuex"
    };
  },
  computed: {
    ...mapState(['counter']),
    counterColor() {
      return this.counter >= 500 ? 'green' : 'red';
    }
  }
}
</script>
