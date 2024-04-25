import { defineStore } from "pinia";

export const useLocationStore = defineStore("location", {
  state: () => ({
    location: null,
    name: "hello",
  }),
  actions: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    showPosition(position) {
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    },
  },
});
