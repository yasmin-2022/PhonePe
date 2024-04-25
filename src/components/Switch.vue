<template>
  <div class="q-pt-sm">
    <q-card>
      <q-card-section class="q-mx-md">
        <div class="text-weight-bold q-mb-md">Switch</div>
        <div class="flex justify-between text-center">
          <div>
            <img
              src="../assets/swiggy.png"
              alt="swiggy"
              width="50px"
              height="50px"
            />
            <div>Swiggy</div>
          </div>
          <div>
            <img src="../assets/netmeds.png" alt="netmads" width="50px" />
            <div>Netmeds</div>
          </div>
          <div>
            <img src="../assets/Tata.png" alt="tata" width="50px" />
            <div>Tata 1mg</div>
          </div>
          <div class="width q-mb-sm">
            <q-btn
              rounded
              icon="arrow_forward_ios"
              color="deep-purple-7"
              class="q-py-md"
            >
            </q-btn>
            <div class="q-my-sm">See All</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Switch",
};
</script>

<style lang="scss" scoped></style>
