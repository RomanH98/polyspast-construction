<script setup>

import CompanyHeader from "@/components/CompanyHeader.vue";
import SixComponent from "@/components/SixComponent.vue";
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
  <SixComponent
      :color="'black'">
  </SixComponent>
  <FooterComponent
      :color="'black'">
  </FooterComponent>
</template>

<style scoped>

</style>
