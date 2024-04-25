<template>
  <div>
    <q-card class="q-mt-sm">
      <q-card-section>
        <div class="flex items-center text-weight-bold" justify-between>
          Recharge & Pay Bills
          <q-chip class="bg-purple-1 text-weight-regular text-blue-grey-14"
            >My Bills</q-chip
          >
        </div>
        <div class="flex justify-between">
          <div class="width text-center">
            <q-icon
              name="smartphone"
              size="40px"
              color="deep-purple-7"
            ></q-icon>
            <div class="q-my-sm">Mobile Recharge</div>
          </div>
          <div class="width text-center">
            <q-icon
              name="shopping_bag"
              size="40px"
              color="deep-purple-7"
            ></q-icon>
            <div class="q-my-sm">Buy <br />FASTag</div>
          </div>
          <div class="width text-center">
            <q-icon
              name="cell_tower"
              size="40px"
              color="deep-purple-7"
            ></q-icon>
            <div class="q-my-sm">DTH</div>
          </div>
          <div class="width text-center">
            <q-icon name="lightbulb" size="40px" color="deep-purple-7"></q-icon>
            <div class="q-my-sm">Electricity</div>
          </div>
          <div class="width text-center">
            <q-icon name="home" size="40px" color="deep-purple-7"></q-icon>
            <div class="q-my-sm">Rent</div>
          </div>
          <div class="width text-center">
            <q-icon
              name="real_estate_agent"
              size="40px"
              color="deep-purple-7"
            ></q-icon>
            <div class="q-my-sm">Loan</div>
          </div>
          <div class="width text-center">
            <q-icon
              name="propane_tank"
              size="40px"
              color="deep-purple-7"
            ></q-icon>
            <div class="q-my-sm">Cylinder</div>
          </div>
          <div class="width text-center">
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
  name: "RechargeAndPayment",
};
</script>

<style lang="scss" scoped></style>
