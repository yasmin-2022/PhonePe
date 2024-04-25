import { defineStore } from "pinia";
export const useScannerStore = defineStore("scannerStore", {
  state: () => ({
    scanner: false,
  }),
});
