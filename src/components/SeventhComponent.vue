<script setup>

import ProjectDocsComponent from "@/components/ProjectDocsComponent.vue";
import {defineComponent, ref, watch} from "vue";
import useEventsBus from "@/eventbus.js";
import router from "@/router/index.js";
const props = defineProps(['color'])
const activeColor = ref('')
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'

const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 6;
})
</script>

<template>
<transition name="fade">
  <div v-if="show" :style="{color: activeColor}" class="container mt-5">
    <div class="flex-row-reverse row h1">
      <div class="col-lg-12">
        Тендеры
      </div>
    </div>
    <div class="row mt-5 h2 mw-100">
      <div class="col-lg-12 ">
        info@polispast-conctruction.ru
      </div>
    </div>

  </div>
</transition>
</template>

<style scoped>
.h1 {
  font-size: 10vh;
}
.h2 {
  font-size: 6vh;
}
.mt-5 {
  margin-top: 10vh !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
