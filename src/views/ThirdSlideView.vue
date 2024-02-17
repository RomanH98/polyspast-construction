
<script setup>
import CompanyHeader from "@/components/CompanyHeader.vue";
import ThirdSlide from "@/components/ThirdSlide.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SlideLabel from "@/components/SlideLabel.vue";

const props = defineProps(['slideLabel'])
</script>

<template>
    <CompanyHeader
        :color="'white'"
    ></CompanyHeader>
    <SlideLabel
        :slide-label="props.slideLabel"
        :color="'white'"
    >
    </SlideLabel>
    <ThirdSlide
        :color="'white'"
    ></ThirdSlide>
    <FooterComponent
        :color="'white'">
    </FooterComponent>
</template>

<style scoped>

</style>
