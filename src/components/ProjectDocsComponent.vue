<script setup>
const props = defineProps(['text', 'imgPath', 'imgAlt'])

</script>

<template>
  <div class="background rounded h-100 text-center swiper-no-swiping">
    <div class="empty-header"></div>
    <div class="text-place-holder h2">
      {{props.text}}
    </div>
    <div class="empty-body"></div>
    <div>
      <img :src="props.imgPath" class="img-fluid" :alt="props.imgAlt">
    </div>
    <div class="empty-footer"></div>
  </div>
</template>

<style scoped>
.background {
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(#b3c6e6, #8453e0, #3b547e);
  //min-height: 75vh;

}
.empty-header {
  min-height: 10vh;
}
.empty-footer {
  min-height: 10vh;
}
.empty-body {
  min-height: 15vh;
}
.img-fluid {
  max-height: 250px;
  //max-width: 360px;
}
</style>
