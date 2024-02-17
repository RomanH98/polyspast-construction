<script setup>
import {ref} from "vue";

const props = defineProps(['color'])
const activeColor = ref('')
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'
</script>

<template>
  <div :style="{color: activeColor}" class="float-end m-2 custom-footer">
    <h4 class="swiper-no-swiping">
      info@polispast-conctruction.ru
    </h4>
  </div>
</template>

<style scoped>
.custom-footer{
  font-weight:bold;
  text-align:right;
  position: absolute;
  bottom:0;
  right:0
}
</style>
