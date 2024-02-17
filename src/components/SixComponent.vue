<script setup>
import ProjectDocsComponent from "@/components/ProjectDocsComponent.vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import {ref, watch} from "vue";
import useEventsBus from "@/eventbus.js";
import {Swiper, SwiperSlide} from "swiper/vue";
import router from "@/router/index.js";
const  modules =  [Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]
const show = ref(false)
const { bus } = useEventsBus()
watch(()=>bus.value.get('currentSlide'), (val) => {
  const [activeSlideIndex] = val ?? []
  show.value = activeSlideIndex === 5;
})
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="container d-none d-md-block">
      <div class="row">
        <div class="col-md-4">
          <ProjectDocsComponent
              text="На каждое изделие разработан паспорт"
              img-path="/ProjectDocs.png"
              img-alt="Product Documents"
          >
          </ProjectDocsComponent>
        </div>
        <div class="col-md-4">
          <ProjectDocsComponent
              text="Проводятся испытания каждого изделия"
              img-path="/ProjectTesting.png"
              img-alt="Product Testing"
          >
          </ProjectDocsComponent>
        </div>
        <div class="col-md-4">
          <ProjectDocsComponent
              text="Неразрушающий контроль каждого изделия"
              img-path="/ProjectCapacity.png"
              img-alt="Product Capacity"
          >
          </ProjectDocsComponent>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
  <div v-if="show" class="container d-xl-none d-lg-none d-md-none d-sm-block d-xs-none" >
    <div class="swiper-wrapper container-sm justify-content-sm-start">
          <swiper
              :direction="'horizontal'"
              :slidesPerView="1"
              :autoplay="{delay: 5000, disableOnInteraction: false,}"
              :pagination="{clickable: true}"
              :modules="modules"
              class="innerSwiper"
              :mousewheel="{
                releaseOnEdges: true
              }"
              :slides-per-view="1"
          >
            <swiper-slide>
              <div class="me-3">
                <ProjectDocsComponent
                    text="Проводятся испытания каждого изделия"
                    img-path="/ProjectTesting.png"
                    img-alt="Product Testing">
                </ProjectDocsComponent>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="me-3">
                <ProjectDocsComponent
                    text="Неразрушающий контроль каждого изделия"
                    img-path="/ProjectCapacity.png"
                    img-alt="Product Capacity">
                </ProjectDocsComponent>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="me-3">
                <ProjectDocsComponent
                    text="На каждое изделие разработан паспорт"
                    img-path="/ProjectDocs.png"
                    img-alt="Product Documents">
                </ProjectDocsComponent>
              </div>
            </swiper-slide>
          </swiper>
    </div>
  </div>
  </transition>
</template>

<style scoped>
</style>
