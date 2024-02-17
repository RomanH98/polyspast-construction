<script setup>

import CompanyHeader from "@/components/CompanyHeader.vue";
import EighthComponent from "@/components/EighthComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SlideLabel from "@/components/SlideLabel.vue";

const props = defineProps(['slideLabel'])
</script>

<template>
  <CompanyHeader
      :color="'black'"
  ></CompanyHeader>
  <SlideLabel
      :slide-label="props.slideLabel"
      :color="'black'"
  >
  </SlideLabel>
    <EighthComponent>

    </EighthComponent>

  <FooterComponent
      :color="'black'">
  </FooterComponent>
</template>

<style scoped>
.ms-md-5 {
  margin-left: 15rem !important;
  width: 60vh;
  max-height: 20vh;
}
</style>
