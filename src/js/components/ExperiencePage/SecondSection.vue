<template>
  <section>
    <div class="insta-page-container">
      <container>
        <h2>На рынке с 2012 года</h2>
      </container>
      <insta-photo />
    </div>
  </section>
</template>

<script>
import container from '../system/Container.vue'
import instaPhoto from '../system/InstaPhotos.vue'

export default {
  components: {
    container,
    instaPhoto
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
  // padding: 164px 0 0 0;
  min-height: 100vh;
  position: relative;
  z-index: 30;
  @media screen and (max-width: $phoneWidth) {
    height: 100%;
  }
  .insta-page-container {
    height: 100%;
    padding: 6% 0 2% 0;
    @media screen and (max-width: $desktopHDWidth ) {
      padding: 10% 0 5% 0;
    }

    @media screen and (max-width: $desktopLgWidth) {
      padding: 15.3% 0 6% 0;
    }

    @media screen and (max-width: $desktopWidth) {
      padding: 15.1% 0 6% 0;
    }

    @media screen and (max-width: $smDesktopWidth) {
      padding: 11.8% 0 6% 0;
    }

    @media screen and (max-width: $phoneWidth) {
      padding: 8.3% 0 7.3% 0;
    }
    .container-grid {
      height: auto;
      h2 {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 500;
        font-size: 82px;
        line-height: 100%;
        color: #ffffff;

        @media screen and (max-width: $desktopLgWidth) {
          font-size: 56px;
          line-height: 100%;
        }

        @media screen and (max-width: $smDesktopWidth) {
          font-size: 48px;
          line-height: 100%;
        }

        @media screen and (max-width: $phoneWidth) {
          font-size: 42px;
          line-height: 100%;
        }
      }
    }
  }
}
</style>