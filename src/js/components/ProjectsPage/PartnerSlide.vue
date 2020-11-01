<template>
  <div class="partner-slider-wrapper">
    <swiper :options="swiperOption" ref="pertnerSwiper">
      <swiper-slide v-for="(partner, index) in partners" :key="index">
        <partnerItem
          :imgSrc="partner.imgSrc"
          :projectLink="partner.linkSrc"
          :projectName="partner.name"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import partnerItem from './PartnerItem.vue'

export default {
  components: {
    swiper,
    swiperSlide,
    partnerItem
  },

  data() {
    return {
      swiperOption: {
        notNextTick: true,
        speed: 3000,
        loop: true,
        slidesPerView: 5,
        // slidesPerGroup: 5,
        loop: true,
        // loopFillGroupWithBlank: true,
        slidesPerColumn: 2,
        spaceBetween: 40,
        wrapperClass: 'partners-swiper-wrapper',
        autoplay: {
          delay: 0,
          reverseDirection: true
        },
        breakpoints: {
          480: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            // spaceBetween: 20
          }
        }
      }
    }
  },

  props: {
    partners: {
      type: Array,
      default: {}
    }
  }
}
</script>

<style lang="scss">
.partners-swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  transition-timing-function: linear;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>