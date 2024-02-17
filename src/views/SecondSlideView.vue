<script setup>

import CompanyHeader from "@/components/CompanyHeader.vue";
import SecondSlide from "@/components/SecondSlide.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SlideLabel from "@/components/SlideLabel.vue";

const props = defineProps(['slideLabel'])
</script>


<template>
<main>
  <CompanyHeader
      :color="'black'"
  ></CompanyHeader>
<SlideLabel
    :slide-label="props.slideLabel">
</SlideLabel>
  <SecondSlide
    :color="'black'"
  ></SecondSlide>

  <FooterComponent
      :color="'black'">
  </FooterComponent>
</main>
</template>

<style scoped>

</style>
