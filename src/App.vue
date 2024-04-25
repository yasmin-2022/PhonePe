<template>
  <div>
    <!-- <QrScanner class="video"></QrScanner> -->
    <PhonePe v-if="!PhonePe" class="PhonePe" />
    <div>
      <router-view v-if="PhonePe" />
    </div>
  </div>
</template>

<script>
// import QrScanner from "./pages/QrScanner.vue";
import PhonePe from "./pages/Phonepe.vue";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App",
  components: {
    PhonePe,
    // QrScanner,
  },
  setup() {
    const PhonePe = ref(false);
    onMounted(() => {
      setTimeout(() => {
        PhonePe.value = true;
      }, 3000);
    });
    return {
      PhonePe,
    };
  },
});
</script>
