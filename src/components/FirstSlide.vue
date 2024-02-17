<template>
  <transition name="fade">
    <div v-if="show" :style="{color: activeColor}">
      <div class="container">
        <div class="d-sm-flex flex-row-reverse row m-3">
          <div class="col-sm-6 col-lg-4">
            <div class="h2 swiper-no-swiping border-left">
              Конструирование и производство специализированного оборудования
            </div>
          </div>
            <div class="col-lg-6 container-md d-none d-xl-block ms-0">
              <img src="/output-onlinepngtools.png" class="img-fluid rounded-2 ms-lg-5">
            </div>
          <div class="col-sm-6 col-lg-2 h1 swiper-no-swiping fw-weight-bold">
            Создаем защиту, обеспечиваем удобство - контейнеры с отделяющимся дном для вашего оборудования
            <div class="mt-5">
              <CallModalButton
                  :button-text="'Рассчитать проект →'"
                  :font-color="'black'"
                  :back-ground-color="'#00ffce'"
              ></CallModalButton>
            </div>
          </div>
        </div>
      </div>
    </div>

  </transition>
</template>
<style scoped>
.border-left {
  border-left: solid 5px #00ffce;
  padding-left: 4%;
}
</style>

<script setup>
import {defineComponent, ref, watch} from "vue";
import useEventsBus from "@/eventbus.js";
import {ModalsContainer, useModal} from "vue-final-modal";
import Popup from "@/components/Popup.vue";
import CallModalButton from "@/components/CallModalButton.vue";
import router from "@/router/index.js";


const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 0;
})

const props = defineProps(['color'])
const activeColor = ref('')
const { open, close } = useModal({
  component: Popup,
  attrs: {
    title: 'Hello World!',
    color: props.color,
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})

props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'


</script>
