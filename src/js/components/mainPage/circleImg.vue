<template>
  <div class="three-point-img">
    <div class="up-border correction-border"></div>
    <div class="right-border correction-border"></div>
    <div class="bottom-border correction-border"></div>

    <div class="three-point-img-container">
      <img
        ref="imgbckg"
        src="/assets/img/danurwendho-adyakusuma-dYxx-jPaF34-unsplash.jpg"
        style="bottom: -80%"
      />
      <svg
        class="desktop-img-mask"
        viewBox="0 0 1547 492"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1547 0H0V492H1547V0ZM489.58 247C489.58 380.653 381.327 489 247.79 489C114.253 489 6 380.653 6 247C6 113.347 114.253 5 247.79 5C381.327 5 489.58 113.347 489.58 247ZM1015.79 247C1015.79 380.653 907.537 489 774 489C640.463 489 532.21 380.653 532.21 247C532.21 113.347 640.463 5 774 5C907.537 5 1015.79 113.347 1015.79 247ZM1300.21 489C1433.75 489 1542 380.653 1542 247C1542 113.347 1433.75 5 1300.21 5C1166.67 5 1058.42 113.347 1058.42 247C1058.42 380.653 1166.67 489 1300.21 489Z"
          fill="#CED7CC"
        />
      </svg>

      <svg
        class="mobile-img-mask"
        viewBox="0 0 456 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M228 0H0V18.9019C13.7863 8.3016 31.0443 2 49.7728 2C94.9346 2 131.546 38.6427 131.546 83.8438C131.546 129.045 94.9346 165.688 49.7728 165.688C31.0443 165.688 13.7863 159.386 0 148.786V168H228H456V148.376C442.127 159.223 424.667 165.688 405.698 165.688C360.536 165.688 323.926 129.045 323.926 83.8438C323.926 38.6427 360.536 2 405.698 2C424.667 2 442.127 8.46432 456 19.312V0H228ZM309.508 83.8438C309.508 129.045 272.897 165.688 227.736 165.688C182.574 165.688 145.963 129.045 145.963 83.8438C145.963 38.6427 182.574 2 227.736 2C272.897 2 309.508 38.6427 309.508 83.8438Z"
          fill="#CED7CC"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import scrollObserver from '../../scripts/sectionIntersectionObserver.js'

export default {
  data() {
    return {
      bottom: -85,
      top: -80
    }
  },

  created() {
    this.animatedScrollObserver = scrollObserver(this.scrollImgHandler)
    this.imgHeight = 0
    this.windowHeight = window.innerHeight / 2
    this.interval = null
  },
  destroyed() {
    this.animatedScrollObserver.disconnect()
  },
  mounted() {
    this.animatedScrollObserver.observe(this.$el)
    //get image background's height
    this.lastScrollPosition = this.$el.offsetHeight
    this.$refs.imgbckg.onload = e => {
      this.imgHeight = e.path[0].offsetHeight
    }

    this.windowHeight = window.innerHeight

    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
    })

    this.bottomAnimationPoint = this.$el.offsetHeight + this.$el.offsetTop
    this.topAnimationPoint =
      this.bottomAnimationPoint +
      this.windowHeight * 0.65 -
      this.$el.offsetHeight / 2

    this.scrollImgHandler()
  },

  methods: {
    scrollImgHandler(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let difference = Math.abs(scrollTop - this.lastScrollPosition)
      let isMove = false

      if (difference > 135) {
        this.lastScrollPosition = scrollTop
        isMove = true
      } else {
        isMove = false
      }

      if (
        this.bottomAnimationPoint <= scrollTop &&
        scrollTop < this.topAnimationPoint &&
        isMove &&
        this.$refs.imgbckg
      ) {
        this.$refs.imgbckg.style.bottom = `${this.setIntervalValue(scrollTop)}%`
      }
    },

    setIntervalValue(curValue) {
      return (
        ((curValue - this.bottomAnimationPoint) * (this.top - this.bottom)) /
          (this.topAnimationPoint - this.bottomAnimationPoint) +
        this.bottom
      )
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.three-point-img {
  position: relative;
  margin: 154px 0;
  @media screen and (max-width: $desktopLgWidth) {
    margin: 142px 0;
  }
  @media screen and (max-width: $desktopWidth) {
    margin: 70px 0;
  }
  @media screen and (max-width: $phoneWidth) {
    margin: 42px 0;
  }

  .up-border {
    margin-top: -1px;
    height: 3px;
    width: 100%;
  }

  .right-border {
    margin-left: -1px;
    height: 100%;
    width: 3px;

    @media screen and (max-width: $phoneWidth) {
      display: none;
    }
  }

  .bottom-border {
    margin-top: -1px;
    height: 3px;
    width: 100%;
    top: 100%;
  }

  .correction-border {
    z-index: 999;
    position: absolute;
    background-color: #CED7CC;
  }

  .three-point-img-container {
    height: 100%;
    position: relative;
    overflow: hidden;

    background-color: green;

    outline: 2px solid #CED7CC; /* Чёрная рамка */
    // border: 3px solid #fff; /* Белая рамка */

    img {
      position: absolute;
      width: 100%;
      transition: bottom 0.8s ease;
      // bottom: 0;
    }
    svg {
      &.desktop-img-mask {
        display: block;
        @media screen and (max-width: $phoneWidth) {
          display: none;
        }
      }
      &.mobile-img-mask {
        display: none;

        @media screen and (max-width: $phoneWidth) {
          display: block;
        }
      }

      position: relative;
    }
  }
}
</style>

