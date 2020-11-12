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
  position: relative;
  z-index: 30;

  @media screen and (max-width: $phoneWidth) {
    height: 100%;
  }
  .insta-page-container {
    height: 100%;
    padding: 185px 0 143px 0;

    @media screen and (max-width: $desktopLgWidth) {
      padding: 152px 0 152px 0;
    }

    @media screen and (max-width: $desktopWidth) {
      padding: 119px 0 82px 0;
    }

    @media screen and (max-width: $smDesktopWidth) {
      padding: 104px 0 80px 0;
    }

    @media screen and (max-width: $phoneWidth) {
      padding: 90px 0 80px 0;
    }
    .container-grid {
      height: auto;
      h2 {
        color: #ffffff;
      }
    }
  }
}
</style>