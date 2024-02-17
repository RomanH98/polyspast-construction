<template>
{{publishedBooksMessage}}
      <swiper
          :direction="'vertical'"
          :mousewheel="{
            releaseOnEdges: true,
          }"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'active-bullet',
			      clickable: true,
			      renderBullet: (index, className) => {
            return `<li class='${className}'>${slidesLabel[index]}</li>`;
            }
          }"

  :slides-per-view="1"
          :modules="modules"
          class="mySwiper"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround1.png)'}">
            <FirstSlideView
                :slide-label="slidesLabel[0]"
            ></FirstSlideView>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround2.png)'}">
            <SecondSlideView
            :slide-label="slidesLabel[1]"
            ></SecondSlideView>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround1.png)'}">
          <ThirdSlideView
              :slide-label="slidesLabel[2]"
          ></ThirdSlideView>
          </div>
        </swiper-slide>


        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround2.png)'}">
            <FourthSlideView></FourthSlideView>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround1.png)'}">
            <FifthSlideView  :slide-label="slidesLabel[4]"></FifthSlideView>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround2.png)'}">
            <SixthSlideView :slide-label="slidesLabel[5]"></SixthSlideView>
          </div>
        </swiper-slide>


        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround1.png)'}">
            <SeventhSlideView></SeventhSlideView>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="bg-image" :style="{'background-image': 'url(BackGround2.png)'}">
            <EighthSlideView :slide-label="slidesLabel[7]"></EighthSlideView>
          </div>
        </swiper-slide>
        <div :class="paginationColor" class="d-none d-xxl-block">
          <ul class="swiper-pagination"></ul>
        </div>
      </swiper>
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, Mousewheel, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useEventsBus from './eventbus.js';

import FirstSlideView from "@/views/FirstSlideView.vue";
import SecondSlideView from "@/views/SecondSlideView.vue";
import ThirdSlideView from "@/views/ThirdSlideView.vue";
import FifthSlideView from "@/views/FifthSlideView.vue";
import SixthSlideView from "@/views/SixthSlideView.vue";
import SeventhSlideView from "@/views/SeventhSlideView.vue";
import EighthSlideView from "@/views/EighthSlideView.vue";
import {computed, onMounted, onUpdated, ref, watch} from "vue";
import FourthSlideView from "@/views/FourthSlideView.vue";
import router from "@/router/index.js";
import {useRoute} from "vue-router";


const  modules =  [Navigation, Pagination, Scrollbar, Mousewheel]
const slidesLabel = ['Главная', 'О нас', 'Возможности', 'Проекты', 'Технические решения', 'Проектная документация', 'Тендеры', 'Контакты']
const route = useRoute()
onMounted(() => {
  emit('currentSlide', 0)
})

const swiperInstance = ref()

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

const {emit}=useEventsBus()
const paginationColor = ref('white');
const setActivePath = function (slideIndex) {
  switch (slideIndex) {
    case 0:
      router.push('/');
      return
    case 1:
      router.push('/about')
      return
    case 2:
      router.push('/possibilities')
      return
    case 3:
      router.push('/projects')
      return
    case 4:
      router.push('/technical_solutions')
      return
    case 5:
      router.push('/projects_docs')
      return
    case 6:
      router.push('/tenders')
      return
    case 7:
      router.push('/contacts')
      return
  }
}

const publishedBooksMessage = computed(() => {
  switch (route.path) {
    case '/':
      swiperInstance.value?.slideTo(0)
      return
    case '/about':
      swiperInstance.value?.slideTo(1)
      return
    case '/possibilities':
      swiperInstance.value?.slideTo(2)
      return
    case '/projects':
      swiperInstance.value?.slideTo(3)
      return
    case '/technical_solutions':
      swiperInstance.value?.slideTo(4)
      return
    case '/projects_docs':
      swiperInstance.value?.slideTo(5)
      return
    case '/tenders':
      swiperInstance.value?.slideTo(6)
      return
    case '/contacts':
      swiperInstance.value?.slideTo(7)
      return
    default:
      swiperInstance.value?.slideTo(0)
  }

})


const onSlideChange = (swiper) => {
    emit('currentSlide', swiper.activeIndex)
    setActivePath(swiper.activeIndex)
    swiper.activeIndex % 2 === 0 ? paginationColor.value = 'white' : paginationColor.value = 'black'
}
</script>
<style>
.bg-image {
  background-size: cover;
  height: 100vh;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 1.0rem !important;
  }
  h2 {
    font-size: 0.8rem !important;
  }
  p {
    font-size: 0.5rem !important;
  }

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Large devices (laptops/desktops, 992px and up) -- This would display the text at 10.0rem on laptops and larger screens */

@media only screen and (min-width: 992px) {
  h1 {
    font-size: 3.0rem ;
  }
  h2 {
    font-size: 2.0rem;
  }
  p {
    font-size: 1.0rem;
  }
}

.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical>.swiper-pagination-bullets {
  right: auto;
  left: 8px;
}


.white {
  background: linear-gradient(to right, #ffffff 1px, transparent 1px);
}
.white .swiper-pagination {
  background: linear-gradient(to right, #ffffff 1px, transparent 1px);
}
.white li {
  color: white;
}
.white li:after {
  background-color: white;
}

.white li:before {
  background-color: #ffffff; /* Цвет маркера */
}

.black {
  background: linear-gradient(to right, #000000 1px, transparent 1px);
}
.black .swiper-pagination {
  background: linear-gradient(to right, #000000 1px, transparent 1px);
}
.black li {
  color: #000000;
}
.black li:after {
  background-color: #000000;
}

.black li:before {
  background-color: #000000; /* Цвет маркера */
}

.swiper-pagination {
  list-style: none;
  padding: 0;
  position: absolute;
}

.swiper-pagination li {
  padding-left: 20px;
  margin-bottom: 10px;

  position: relative;
  cursor: pointer;
}
.swiper-pagination  li:after {
  border-color: white;
}

.swiper-pagination li:before {
  content: "";
  position: absolute;
  left: -4px; /* Расположение маркера */
  top: 50%;
  transform: translateY(-50%);
  width: 8px; /* Размер маркера */
  height: 8px;
  border-radius: 50%; /* Форма маркера */
}

.swiper-pagination  li:first-child {
  padding-top: 10px; /* Поднять первый элемент для выравнивания с линией */
}

.swiper-pagination  li:last-child {
  margin-bottom: 0; /* Убрать лишний отступ у последнего элемента */
}

.bullet.active-bullet {
  color: #0029ff;
  font-size: x-large;
}

</style>
