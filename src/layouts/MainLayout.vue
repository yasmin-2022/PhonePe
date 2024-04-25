<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="bg-deep-purple-7">
        <q-btn
          flat
          dense
          aria-label="Menu"
          class="bg-white rounded-borders q-ml -md"
        >
          <q-icon name="person" color="deep-purple-14" outline />
        </q-btn>
        <q-toolbar-title
          class="text-body2 text-weight-bolder q-mt-md q-mb-none"
        >
          Add Address
          <q-icon name="arrow_drop_down" size="20px"> </q-icon>
          <div class="text-body2 text-blue-grey-3 q-mb-sm">kath ka pul</div>
        </q-toolbar-title>
        <div class="q-mr-sm">
          <q-icon @click="scanner = true" name="qr_code_scanner" size="24px" />
          <q-icon name="notifications" outline size="24px" class="q-mx-sm">
          </q-icon>
          <q-icon name="help" size="24px" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      class="flex justify-around q-pa-sm bg-white text-grey-7 text-center shadow-10 text"
    >
      <div class="text">
        <q-icon name="home" size="24px" class="icon"></q-icon>
        <div>Home</div>
      </div>
      <div class="text">
        <q-icon name="currency_rupee" size="24px" class="icon"></q-icon>
        <div>Credit</div>
      </div>
      <div class="text">
        <q-icon name="verified_user" size="24px" class="icon"></q-icon>
        <div>Insurance</div>
      </div>
      <div class="text">
        <q-icon name="outbound" size="24px" class="icon"></q-icon>
        <div>Wealth</div>
      </div>
      <div class="text">
        <q-icon name="compare_arrows" size="24px" class="icon"></q-icon>
        <div>History</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useScannerStore } from "../stores/scanner";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "MainLayout",
  setup() {
    const scannerStore = useScannerStore();
    const { scanner } = storeToRefs(scannerStore);
    const menu = ref(false);
    return {
      scannerStore,
      scanner,
      menu,
    };
  },
});
</script>
