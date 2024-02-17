<script setup>
import {ref, watch} from "vue";
import useEventsBus from "@/eventbus.js";

const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 7;
})
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="container">
      <div class="d-sm-flex flex-row-reverse row">
        <div class="col-6 d-none d-xxl-block">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb35bf1a6bac0d23cb98576e21d587665d61a56a9b28ec86a734f845d3847d13&amp;source=constructor" width="689" height="667" frameborder="0"></iframe>
        </div>
        <div class="col-xl-6">
          <div class="h2 mt-5">
            Производство:
          </div>
          <div class="h3 mt-5">
            Астраханская область, пос. Трусово, ул. Школьная 6Г
          </div>
          <div class="h2 mt-5">
            Телефон:
          </div>
          <div class="h3 mt-5">
            +7 (983) 243-20-12
          </div>
          <div class="h3 mt-5">
            +7 (999) 632-53-93
          </div>
          <div class="h2 mt-5">
            Электронная почта:
          </div>
          <div class="h3 mt-5">
            info@polispast-construction.ru
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
