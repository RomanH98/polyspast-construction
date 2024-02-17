<script setup>
import {ModalsContainer, useModal} from "vue-final-modal";
import Popup from "@/components/Popup.vue";

const props = defineProps(['buttonText', 'fontColor', 'backGroundColor'])
const { open, close } = useModal({
  component: Popup,
  attrs: {
    title: 'Hello World!',
    color: props.fontColor,
    onConfirm(formData) {
      console.log('asd', formData)
      close()
    },
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})

</script>

<template>
<div class="container">
  <button class="btn btn-lg btn-primary swiper-no-swiping" type="submit" :style="{'background-color': backGroundColor + ' !important', color: fontColor + ' !important'}" @click="open">{{buttonText}}</button>
</div>
  <ModalsContainer />
</template>

<style scoped>
</style>
