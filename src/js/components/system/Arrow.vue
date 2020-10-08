<template>
  <span :style="textStyle">
    {{ arrowText }}

    <svg
      :width="arrWidth"
      :height="arrHeight"
      :viewBox="viewBox"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M59.7498 14.4841L61.3353 16L69.6506 8.04995L61.2307 0L59.6453 1.51583L65.3814 7.00001L0 7V9L65.4859 9.00001L59.7498 14.4841Z"
        :fill="arrColor"
      />
    </svg>
  </span>
</template>

<script>
export default {
  computed: {
    viewBox() {
      return `0 0 ${this.arrWidth} ${this.arrHeight}`
    },
    textStyle() {
      return {
        color: this.arrColor
      }
    }
  },
  props: {
    arrWidth: {
      type: String,
      default: '70'
    },
    arrHeight: {
      type: String,
      default: '16'
    },
    arrColor: {
      type: String,
      default: '#EE5B5B'
    },
    arrowText: {
      type: String,
      default: '#EE5B5B'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

span {
  font-family: 'Spectral';
  font-weight: bold;
  font-size: 26px;
  line-height: 176.9%;
  text-decoration-line: underline;

  @media screen and (max-width: $desktopLgWidth) {
    font-size: 22px;
  }
  @media screen and (max-width: $desktopWidth) {
    font-size: 24px;
  }
  @media screen and (max-width: $phoneWidth) {
    font-size: 20px;
  }
  svg {
    margin-left: 24px;
  }
}
</style>