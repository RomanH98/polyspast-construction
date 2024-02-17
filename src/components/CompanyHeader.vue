<template>
  <div class="container-fluid mt-1">
    <div class="row text-center w-100" v-bind:style="{color: activeColor}">
      <div class="col-md-auto d-none d-xxl-block">
        <img v-bind:srcset="logoPath" width="350px" class="img-fluid mx-auto ">
      </div>
      <div class="col mt-lg-5 h1 swiper-no-swiping">
        ПОЛИСПАСТ КОНСТРАКШН
      </div>
      <div class="col-lg-auto mt-lg-5 h1 swiper-no-swiping">
        +7 (983) 243-20-12
      </div>
      <div class="col-lg-auto mt-lg-5">
        <CallModalButton
            :button-text="'Обратный звонок'"
            :font-color="'white'"
            :back-ground-color="'#192d58'"
        ></CallModalButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-fluid {
  margin-left: -5%;
}
h1 {
  font-size: ;
}

</style>

<script setup>
import {ref} from "vue";
import {ModalsContainer, useModal} from 'vue-final-modal'
import Popup from "@/components/Popup.vue";
import CallModalButton from "@/components/CallModalButton.vue";

const props = defineProps(['color'])
const activeColor = ref('')
const logoPath = ref('/PolyPlastLogoBlack.png')

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

props.color === 'black' ? logoPath.value = '/PolyPlastLogoBlack.png' : logoPath.value = '/PolyPlastLogo.png'
props.color === 'black' ? activeColor.value = 'black' : activeColor.value = 'white'
</script>
