<template>
  <div
    v-if="isMobileFlag"
    class="project-list-container project-list-container-mobile"
  >
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(project, index) in projectsArr" :key="index">
        <projectCard
          class="partner-card"
          :domainName="project.domainName"
          :description="project.description"
          :linkPath="project.linkPath"
          :imgSrc="project.imgSrc"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import projectCard from './ProjectCard.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    projectCard,
    swiper,
    swiperSlide
  },
  props: {
    isMobileFlag: {
      type: Boolean,
      default: false
    },
    projectsArr: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1.4,
        spaceBetween: 42,
        loop: true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.project-list-container {
  width: 59.3%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  perspective: 500px;
  transform-style: preserve-3d;
  @media screen and (max-width: $desktopLgWidth) {
    width: 59.2%;
  }
  @media screen and (max-width: $desktopWidth) {
    width: 100%;
  }
  .partner-card {
    width: 45%;
    margin-bottom: 2.9%;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
    @media screen and (max-width: $phoneWidth) {
      width: 100%;
    }
  }
}

.project-list-container-mobile {
  @media screen and (max-width: $phoneWidth) {
    margin: 9px 0 0 0;
    padding: 0 0 9.9% 42px;
  }
}
</style>