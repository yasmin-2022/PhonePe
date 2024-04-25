<template>
  <div>
    <div v-if="scanner == true">
      <QrScanner class="video"></QrScanner>
    </div>
    <div v-if="!scanner" class="home q-py-sm">
      <Offer />
      <Carousel />
      <div class="offer q-mt-sm q-pt-md q-px-md">
        <div class="text-bold">Transfer Money</div>
        <div class="flex justify-around text-center">
          <div class="icon-text">
            <q-icon
              name="person"
              size="25px"
              color="white"
              class="bg-deep-purple-6 q-pa-sm rounded-borders"
            />
            <div>To Mobile Number</div>
          </div>
          <div class="icon-text">
            <q-icon
              name="account_balance"
              size="25px"
              color="white"
              class="bg-deep-purple-6 q-pa-sm rounded-borders"
            />
            <div>To Bank/UPI ID</div>
          </div>
          <div class="icon-text">
            <q-icon
              name="refresh"
              size="25px"
              color="white"
              class="bg-deep-purple-6 q-pa-sm rounded-borders"
            />
            <div>To Self Account</div>
          </div>
          <div class="icon-text">
            <q-icon
              name="account_balance"
              size="25px"
              color="white"
              class="bg-deep-purple-6 q-pa-sm rounded-borders"
            />
            <div>Check Bank Balance</div>
          </div>
        </div>
      </div>
      <q-card
        class="bg-transparent flex justify-around q-mt-md shadow-0 text-center text-white text-weight-medium q-pa-none"
      >
        <q-card-section class="bg-blue-9 card rounded-borders">
          <q-icon name="account_balance_wallet" size="30px"></q-icon>
          <div>phonepe Wallet</div>
        </q-card-section>
        <q-card-section class="bg-blue-9 card rounded-borders">
          <q-icon name="redeem" size="30px" />
          <div>Rewards</div>
        </q-card-section>
        <q-card-section class="bg-blue-9 card rounded-borders">
          <q-icon name="volume_mute" size="30px" />

          <div>Refer & Get ₹100</div>
        </q-card-section>
      </q-card>
      <q-card class="q-mt-sm flex items-center">
        <q-img src="../assets/upi.png" class="img"></q-img>
        <q-separator vertical inset size="2px" />
        <span class="q-ml-md text-subtitle1">PIN-less Payments</span>
        <q-space />
        <q-btn rounded class="bg-deep-purple-7 text-white">TRY NOW</q-btn>
      </q-card>
      <Recharge />
      <SponsoredLink />
      <Insurance />
      <Travel />
      <Switch />
      <SponsoredGame />
      <AppsByPhonePe />
    </div>
  </div>
</template>

<script>
import { useScannerStore } from "../stores/scanner";
import QrScanner from "src/pages/QrScanner.vue";
import Offer from "./Offer.vue";
import SponsoredLink from "./SponsoredLinks.vue";
import Insurance from "./Insurance.vue";
import Travel from "./Travel.vue";
import Switch from "./Switch.vue";
import SponsoredGame from "./SponsoredGame.vue";
import AppsByPhonePe from "./AppsByPhonePe.vue";
import Carousel from "./Carousel.vue";
import Recharge from "./Recharge.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
export default {
  name: "HomePage",
  components: {
    Carousel,
    Offer,
    Recharge,
    SponsoredLink,
    Insurance,
    Travel,
    Switch,
    SponsoredGame,
    AppsByPhonePe,
    QrScanner,
  },
  setup() {
    const scannerStore = useScannerStore();
    const { scanner } = storeToRefs(scannerStore);
    return {
      scannerStore,
      scanner,
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
