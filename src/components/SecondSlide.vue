<template>
  <transition name="fade">
    <div v-if="show" :style="{color: activeColor}" class="m-5">
      <div class="container-fluid">
        <div class="d-flex flex-row-reverse">
          <div class="col-sm-6 col-lg-5 h5 swiper-no-swiping">
            Компания «Полиспаст-Констракшн» с 2014 года зарекомендовала себя как добросовестного подрядчика.
            Мы занимаемся производством кожухов,
            обеспечивающих легкий доступ к оборудованию, мобильность и надежную защиту. Мы создаем
            решения, которые сочетают в себе удобство
            использования и безопасность, чтобы ваше
            оборудование работало эффективно и сохраняло свою транспортабельность.
            <div class="mt-5">
              <CallModalButton
                  :button-text="'Рассчитать проект →'"
                  :font-color="'black'"
                  :back-ground-color="'#00ffce'"
              ></CallModalButton>
            </div>
          </div>
          <div class="col-lg-5 container-md d-none d-md-block">
            <img src="/SecondSlideImage.png" class="img-fluid rounded-2 mx-auto" alt="Works in Factory">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
h5 {
  //font-size: 2vh !important;
  //border-left: 5px solid black;
  //padding-left: 10px;
}
h1 {
  //font-size: 3vh !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import {defineComponent, ref, watch} from "vue";
import useEventsBus from "@/eventbus.js";
import CallModalButton from "@/components/CallModalButton.vue";
import router from "@/router/index.js";
const props = defineProps(['color'])
const activeColor = ref('')
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'
const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 1;
})
</script>
