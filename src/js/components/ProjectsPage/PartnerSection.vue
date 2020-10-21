<template>
  <section>
    <container>
      <navPanel
        colorButton="#fff"
        linkUrl="/"
        link-text="главная"
        @menuToggle="omMenuToggle"
      />
      <div class="desktop-wrapper">
        <div class="project-list-header">
          <h2>Наши проекты</h2>
        </div>
        <div v-if="!isMobile" class="project-list-container">
          <projectCard
            class="partner-card"
            v-for="(partner, index) in partners"
            :key="index"
            :domainName="partner.domainName"
            :description="partner.description"
            :linkPath="partner.linkPath"
            :imgSrc="partner.imgSrc"
          />
        </div>
      </div>
    </container>
    <div
      v-if="isMobile"
      class="project-list-container project-list-container-mobile"
    >
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(partner, index) in partners" :key="index">
          <projectCard
            class="partner-card"
            :domainName="partner.domainName"
            :description="partner.description"
            :linkPath="partner.linkPath"
            :imgSrc="partner.imgSrc"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import navPanel from '../system/NavigationPanel.vue'
import container from '../system/Container.vue'
import projectCard from './PartnerCard.vue'

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    navPanel,
    container,
    projectCard,
    swiper,
    swiperSlide
  },
  data() {
    return {
      isMobile: false,
      swiperOption: {
        slidesPerView: 1.4,
        spaceBetween: 42
      },
      partners: [
        {
          imgSrc: '/assets/img/mintcom.png',
          domainName: 'мята.com',
          description: 'Проект о матча чае',
          linkPath: 'https://xn--80axta9d.com/'
        },
        {
          imgSrc: '/assets/img/rutea.png',
          domainName: 'ru.tea.community',
          description: 'Чайное комьюнити',
          linkPath: 'https://ru.tea.community/'
        },
        {
          imgSrc: '/assets/img/teamotea.png',
          domainName: 'teamotea.shop',
          description: 'Магазин лучшего чая',
          linkPath: 'https://ru.tea.community/'
        },
        {
          imgSrc: '/assets/img/teavideo.png',
          domainName: 'tea.video',
          description: 'Видеоблог о чае',
          linkPath: 'https://tea.video/'
        },
        {
          imgSrc: '/assets/img/teaschoole.png',
          domainName: 'чайнаяшкола.рф',
          description: 'Чайная школа',
          linkPath: 'http://xn--80aaa8agglk9eo0f.xn--p1ai/'
        },
        {
          imgSrc: '/assets/img/teamoteablog.png',
          domainName: 'teamotea.com',
          description: 'Проект о матча чае',
          linkPath: 'https://teamotea.com/'
        }
      ]
    }
  },
  mounted() {
    this.isMobile = this.detectMobileWidth()
    window.addEventListener('resize', () => {
      this.isMobile = this.detectMobileWidth()
    })
  },
  methods: {
    detectMobileWidth() {
      return document.body.offsetWidth <= 480
    },
    omMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

section {
  background: linear-gradient(
      70.77deg,
      #1a5a38 1.04%,
      rgba(30, 114, 69, 0.87) 100%
    ),
    #1a5a38;
  .project-list-container-mobile {
    @media screen and (max-width: $phoneWidth) {
      margin: 0 0 0 42px;
      padding: 0 0 9.9% 0;
    }
  }
  .desktop-wrapper {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: $desktopWidth) {
      flex-direction: column;
    }

    .project-list-header {
      width: 32.2%;
      @media screen and (max-width: $desktopLgWidth) {
        width: 31.9%;
      }
      @media screen and (max-width: $desktopWidth) {
        width: 100%;
      }
      h2 {
        color: white;
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 500;
        font-size: 82px;
        line-height: 100%;
        @media screen and (max-width: $desktopLgWidth) {
          font-size: 56px;
        }
        @media screen and (max-width: $desktopWidth) {
          margin-bottom: 80px;
        }
        @media screen and (max-width: $smDesktopWidth) {
          font-size: 48px;
        }

        @media screen and (max-width: $phoneWidth) {
          font-size: 42px;
          margin-bottom: 52px;
        }
      }
    }
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
  }
}
</style>