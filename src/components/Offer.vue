<template>
  <div v-if="close" class="offer q-pt-md q-pl-md">
    <div class="flex justify-between">
      <div class="flex">
        <q-img class="img" src="../assets/upi.png" alt="upi" />
        <div class="q-mt-sm">
          <div class="text-h6">Earn up to ₹100 Cashback</div>
          <div>Order with RuPay Credit Card Via</div>
        </div>
      </div>
      <q-icon
        name="close"
        size="24px"
        class="float-right q-mr-md"
        @click="close = false"
      />
    </div>
    <div class="flex justify-end q-mr-md q-mt-md">
      <q-btn flat class="text-deep-purple-14">Later</q-btn>
      <q-btn rounded class="bg-deep-purple-7 text-white">DOWNLOAD</q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const close = ref(true);
</script>

<style lang="scss" scoped></style>
