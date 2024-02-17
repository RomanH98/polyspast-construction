<script setup>
import CompanyHeader from "@/components/CompanyHeader.vue";
import FirstSlide from "@/components/FirstSlide.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SlideLabel from "@/components/SlideLabel.vue";

const props = defineProps(['slideLabel'])
</script>

<template>
  <CompanyHeader :color="'white'"></CompanyHeader>
  <SlideLabel
      :slide-label="props.slideLabel"
      :color="'white'"
      >
  </SlideLabel>
  <FirstSlide :color="'white'"></FirstSlide>
  <FooterComponent :color="'white'"></FooterComponent>
</template>

<style scoped>

</style>
