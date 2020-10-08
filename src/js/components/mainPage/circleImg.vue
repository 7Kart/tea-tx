<template>
  <div class="three-point-img-container">
    <img
      ref="imgbckg"
      src="/assets/img/danurwendho-adyakusuma-dYxx-jPaF34-unsplash.jpg"
    />

    <svg
      ref="svgmask"
      viewBox="0 0 1536 707"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1536 0.714844H1V321.842C0.338162 329.139 0 336.53 0 344C0 351.47 0.338162 358.861 1 366.158V706.26H1536V0.714844ZM1 366.158C12.1797 489.426 115.717 586 241.79 586C375.327 586 483.58 477.653 483.58 344C483.58 210.347 375.327 102 241.79 102C115.717 102 12.1797 198.574 1 321.842V366.158ZM1009.79 344C1009.79 477.653 901.537 586 768 586C634.463 586 526.21 477.653 526.21 344C526.21 210.347 634.463 102 768 102C901.537 102 1009.79 210.347 1009.79 344ZM1294.21 586C1427.75 586 1536 477.653 1536 344C1536 210.347 1427.75 102 1294.21 102C1160.67 102 1052.42 210.347 1052.42 344C1052.42 477.653 1160.67 586 1294.21 586Z"
        fill="#1A2A38"
      />
    </svg>
  </div>
</template>

<script>
import imgMask from '../svg/mask.vue'
import testMask from '../svg/svgMask.vue'
export default {
  components: {
    imgMask,
    testMask
  },
  
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.three-point-img-container {
  height: 100%;
  position: relative;
  overflow: hidden;

  margin: 164px 0;
  @media screen and (max-width: $desktopLgWidth) {
    margin: 152px 0;
  }
  @media screen and (max-width: $desktopWidth) {
    margin: 80px 0;
  }
  @media screen and (max-width: $phoneWidth) {
    margin: 40px 0;
  }
  img {
    position: absolute;
    width: 100%;
  }
  svg {
    position: relative;
  }
}
</style>