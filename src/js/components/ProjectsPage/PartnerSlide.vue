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
  computed:{
    chunkPartners(){
    
    }
  },
  data() {
    return {
      swiperOption: {
        speed: 6000,
        loop: true,
        slidesPerView: 5,


        slidesPerColumn: 2,
        spaceBetween: 40,
        wrapperClass: 'partners-swiper-wrapper',
        autoplay: {
          delay: 0,
          // reverseDirection: true,
          disableOnInteraction: false
        },
        breakpoints: {
          480: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            speed: 6000
            // spaceBetween: 20
          }
        }
      }
    }
  },

  mounted() {
    console.log('mounted slider section')
    this.$nextTick(() => {
      this.$refs.pertnerSwiper.swiper.autoplay.stop()

      let observer = new IntersectionObserver((enties, observer) => {
        enties.forEach(entry => {
          if (
            entry.isIntersecting &&
            !this.$refs.pertnerSwiper.swiper.autoplay.running
          ) {
            console.log('activate')

            this.$refs.pertnerSwiper.swiper.autoplay.start()
          }
        })
      })

      observer.observe(this.$el)
    })
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
  // position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transition-timing-function: linear;
  flex-wrap: wrap;
}
</style>