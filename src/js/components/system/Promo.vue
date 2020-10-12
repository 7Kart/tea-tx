<template>
  <div class="promo-container">
    <container>
      <!-- <main-menu v-show="isOpenMenu" @menuToggle="onMenuToggle" /> -->
      <div class="menu-button-container">
        <menuButton @menuToggle="onMenuToggle" />
      </div>
      <div class="logo-container">
        <logo />
      </div>
      <div class="promo-content">
        <next-slide />
        <p ref="promoText">
          «Короткое описание чайной компании, которая находится в Китае с 2010
          года»
        </p>
      </div>
    </container>
  </div>
</template>

<script>
import container from './Container.vue'
import menuButton from './menuButton.vue'
import logo from './logo.vue'
import nextSlide from '../UI/nextSlideButton.vue'
import mainMenu from './menu.vue'

export default {
  data() {
    return {
      isOpenMenu: false,
      isScrolling: false
    }
  },
  components: {
    container,
    menuButton,
    logo,
    nextSlide,
    mainMenu
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.promoText.classList.add('appearance-promo-text')
    })
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';
@import '../../../assets/scss/utils/mixins.scss';

@import '../../../assets/scss/utils/grid.scss';

.promo-container {
  background-image: url('../../../assets/img/main-img.png');
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .menu-button-container {
    margin-top: 126px;
    text-align: right;
    @media screen and (max-width: $smTableWidth) {
      margin-top: 60px;
    }
  }

  .logo-container {
    margin-top: 225px;
    @media screen and (max-width: $desktopLgWidth) {
      margin-top: 164px;
    }
    @media screen and (max-width: $desktopWidth) {
      margin-top: 177px;
    }
    @media screen and (max-width: $smTableWidth) {
      margin-top: 77px;
      margin-bottom: 40px;
    }

    @media screen and (max-width: $phoneWidth) {
      margin-bottom: 0;
    }
  }

  .promo-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    perspective: 500px;
    transform-style: preserve-3d;
    @media screen and (max-width: $smTableWidth) {
      align-items: flex-start;
    }
    @media screen and (max-width: $smTableWidth) {
      flex-direction: column-reverse;
      justify-content: flex-end;
    }
    p {
      font-size: 36px;
      line-height: 136%;
      color: white;
      width: 703px;

      transform: translate(0px, 100%) rotateX(-45deg);
      opacity: 0;
      &.appearance-promo-text {
        transition: all 1.5s ease;
        transition-delay: .1s;

        transform: rotateX(0) translate(0px, 0px);
        opacity: 1;
      }

      @media screen and (max-width: $desktopLgWidth) {
        font-size: 32px;
        line-height: 136%;
        width: 519px;
      }

      @media screen and (max-width: $desktopWidth) {
        font-size: 32px;
        line-height: 134.1%;
        width: 477px;
      }

      @media screen and (max-width: $smDesktopWidth) {
        font-size: 28px;
        line-height: 134.1%;
        width: 550px;
      }

      @media screen and (max-width: $smTableWidth) {
        font-size: 26px;
        line-height: 134.1%;
        width: 100%;
      }

      @media screen and (max-width: $phoneWidth) {
        font-size: 5vw;
        line-height: 110%;
      }
    }
  }
  // 74px
}
</style>