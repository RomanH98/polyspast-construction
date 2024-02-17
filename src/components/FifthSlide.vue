<script setup>
import { ref, reactive, watch } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useEventsBus from "@/eventbus.js";
import CallModalButton from "@/components/CallModalButton.vue";
import router from "@/router/index.js";
const  modules =  [Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]
const props = defineProps(['color'])

const activeColor = ref('')
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'

const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 4;
})

</script>

<template>
  <transition name="fade">
    <div v-if="show" :style="{color: activeColor}" class="m-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 swiper-no-swiping">
            <h2 class="mb-4">
              Надежное крепление пола к контейнеру,
              выдерживающего заданную нагрузку
            </h2>
            <h2 class="mb-4">
              Оснащение светом, проводкой, средствами
              пожаротушения, системой мониторинга и иными
              техническими приборами, согласно техническому
              заданию
            </h2>
            <h2 class="mb-4">
              Тепло/звуко изоляция под нужды заказчика
            </h2>
            <h2 class="mb-4">
              Оснащение фундамента оборудования виброизоляцией под нужды заказчика
            </h2>
            <h2 class="mb-4">
              Покраска контейнера согласно дизайн-коду компании
            </h2>
            <div class="mt-2">
              <CallModalButton
                  :button-text="'Рассчитать проект →'"
                  :font-color="'black'"
                  :back-ground-color="'#00ffce'"
              ></CallModalButton>
            </div>

          </div>
          <div class="col-lg-2 swiper-no-swiping">
            <swiper
                :direction="'vertical'"
                :slidesPerView="2"
                :autoplay="{delay: 5000, disableOnInteraction: false,}"
                :pagination="{clickable: true}"
                :modules="modules"
                class="innerSwiper d-none d-lg-block"
                :mousewheel="{
                releaseOnEdges: true
              }"
                :slides-per-view="2"
            >
              <swiper-slide ><img src="/lukoil.png" class="img-fluid mx-auto d-none d-md-block"></swiper-slide>
              <swiper-slide ><img src="/RetroChina.png" class="img-fluid mx-auto d-none d-md-block"></swiper-slide>
              <swiper-slide><img src="/lukoil.png" class="img-fluid mx-auto d-none d-md-block"></swiper-slide>
              <swiper-slide><img src="/RetroChina.png" class="img-fluid mx-auto d-none d-md-block"></swiper-slide>
              <swiper-slide><img src="/RetroChina.png" class="img-fluid mx-auto d-none d-md-block"></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<style scoped>
.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical>.swiper-pagination-bullets {
  right: auto;
  left: 8px;
}
.innerSwiper {
  height: 60vh;
  margin-left: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
