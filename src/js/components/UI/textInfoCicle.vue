<template>
  <div class="info-circle" :class="fontClass">
    <h3 class="circle-header">{{ headerContent }}</h3>
    <p>{{ textContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headerContent: {
      type: String,
      default: ''
    },
    textContent: {
      type: String,
      default: ''
    },
    fontClass: {
      type: String
    }
  },
  mounted() {
    this.setHeight()
    window.addEventListener('resize', () => {
      this.setHeight()
    })
  },
  methods: {
    setHeight() {
      this.$el.style.height = `${this.$el.offsetWidth}px`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.info-circle {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.big-circle {
  h3 {
    font-size: 102px;
    line-height: 95%;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 74px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 76px;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 52px;
    }
  }
  p {
    font-size: 36px;
    line-height: 90%;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 26px;
      line-height: 100%;
    }
    @media screen and (max-width: $desktopWidth) {
      font-size: 26px;
      line-height: 100%;
    }
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 27px;
      line-height: 100%;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 18px;
      line-height: 100%;
    }
  }
}

.middle-circle {
  p {
    font-size: 36px;
    line-height: 100%;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 26px;
    }
    @media screen and (max-width: $desktopWidth) {
      font-size: 26px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 27px;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 20px;
    }
  }
}

.small-circle {
  h3 {
    font-size: 50px;
    line-height: 165.9%;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 38px;
    }

    @media screen and (max-width: $smDesktopWidth) {
      font-size: 37px;
    }
    @media screen and (max-width: $tableWidth) {
      line-height: 100%;
      font-size: 34px;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 32px;
    }
  }
  p {
    font-size: 24px;
    line-height: 100%;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 18px;
    }
    @media screen and (max-width: $desktopWidth) {
      font-size: 18px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 18px;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 16px;
    }
  }
}
</style>