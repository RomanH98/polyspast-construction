<script setup>
const props = defineProps(['slideLabel', 'color'])
</script>

<template>
  <div class="h1 ms-5 swiper-no-swiping container-fluid float-start d-block d-xxl-none" :style="{color: props.color}">
    {{ props.slideLabel }}
  </div>
</template>

<style scoped>

</style>
