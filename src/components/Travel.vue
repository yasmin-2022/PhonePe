<template>
  <div class="q-pt-sm">
    <q-card>
      <q-card-section>
        <div class="text-weight-bold q-mb-md">TravelBooking</div>
        <div class="flex justify-between text-center">
          <div class="width q-mb-sm">
            <q-icon name="flight" size="46px" color="deep-purple-7"></q-icon>
            <div>Flights</div>
          </div>
          <div class="width q-mb-sm">
            <q-icon name="bus_alert" size="46px" color="deep-purple-7"></q-icon>
            <div>Bus</div>
          </div>
          <div class="width q-mb-sm">
            <q-icon name="train" size="46px" color="deep-purple-7"></q-icon>
            <div>Trains</div>
          </div>
          <div class="width q-mb-sm">
            <q-icon
              name="location_city"
              size="46px"
              color="deep-purple-7"
            ></q-icon>
            <div>Hotels</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "TravelBooking",
};
</script>

<style lang="scss" scoped></style>
