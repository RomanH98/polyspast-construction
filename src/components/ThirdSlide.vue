<template>
  <transition name="fade">
  <div  v-if="show" :style="{color: activeColor}">
    <div class="container swiper-no-swiping">
      <div class="d-sm-flex flex-row-reverse row">
        <div class="col-sm-6 color-border border-sm">
          <div class="flex-column pb-lg-5 ps-lg-5">
            <div class="h1">
              Обеспечение оборудования:
            </div>
            <ul class="flex-column">
              <li class="h1">мобильностью</li>
              <li class="h1">легким доступом обслуживающего персонала</li>
              <li class="h1"> защитой от погодных условий</li>
            </ul>
            <div class="flex-column h1">
              <CallModalButton
                  :button-text="'Рассчитать проект →'"
                  :font-color="'black'"
                  :back-ground-color="'#00ffce'"
              ></CallModalButton>
            </div>

          </div>
        </div>
        <div class="col-sm-6 h1">
             от 8 Т
            <div class="h5">Грузоподъемность</div>
            5.9 х 2.3 х 2.3 м3
            <div class="h5">Внутренние размеры</div>
            П-IIа
            <div class="h5">Класс пожароопасности</div>
        </div>

      </div>
    </div>

  </div>
  </transition>
</template>
<style scoped>
.color-border {
  border-left: solid 5px rgba(255, 255, 255, 0.99);
}
</style>

<script setup>
import { ref, watch } from 'vue'

import useEventsBus from "@/eventbus.js";
import CallModalButton from "@/components/CallModalButton.vue";
import router from "@/router/index.js";
const props = defineProps(['color'])
const activeColor = ref('')
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'
const { bus } = useEventsBus()
const show = ref(false)

watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 2;
})

</script>
