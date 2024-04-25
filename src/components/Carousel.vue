<template>
  <div>
    <q-carousel
      class="offer q-mt-sm"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../assets/sendmoney.png" />
      <q-carousel-slide :name="2" img-src="../assets/RummyImg.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/investShareMarket.jpeg" />
      <q-carousel-slide :name="4" img-src="../assets/ViewReward.png" />
      <q-carousel-slide :name="6" img-src="../assets/Dream11.jpeg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CarousalView",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="scss" scoped></style>
