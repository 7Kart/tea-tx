<template>
  <div class="three-point-img-container">
    <img
      ref="imgbckg"
      src="/assets/img/danurwendho-adyakusuma-dYxx-jPaF34-unsplash.jpg"
      style="bottom: -80%"
    />
    <svg viewBox="0 0 1536 484" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M241.79 0H0V242V484H241.79H768H1294.21H1536V242V0H1294.21H768H241.79ZM241.79 0C375.327 0 483.58 108.347 483.58 242C483.58 375.653 375.327 484 241.79 484C108.253 484 0 375.653 0 242C0 108.347 108.253 0 241.79 0ZM768 0C901.537 0 1009.79 108.347 1009.79 242C1009.79 375.653 901.537 484 768 484C634.463 484 526.21 375.653 526.21 242C526.21 108.347 634.463 0 768 0ZM1294.21 0C1427.75 0 1536 108.347 1536 242C1536 375.653 1427.75 484 1294.21 484C1160.67 484 1052.42 375.653 1052.42 242C1052.42 108.347 1160.67 0 1294.21 0Z"
        fill="#CED7CC"
      />
    </svg>
  </div>
</template>

<script>
import scrollObserver from '../../scripts/sectionIntersectionObserver.js'

export default {
  data() {
    return {
      bottom: -95,
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
    this.animatedScrollObserver.disconnect();
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

      if (difference > 100) {
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
    transition: bottom 0.5s ease;
    // bottom: 0;
  }
  svg {
    position: relative;
  }
}
</style>