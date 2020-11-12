<template>
  <a
    :href="linkAddress"
    target="_blank"
    :style="textStyle"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <p>{{ linkText }}</p>

    <svg
      ref="svgExtLink"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0538 0.502686L28.4961 1.94599L13.2063 17.2358L11.764 15.7935L27.0538 0.502686Z"
        :fill="linkColor"
      />
      <path
        d="M28.8001 10.4002H26.7601V2.2402H18.6001V0.200195H28.8001V10.4002Z"
        :fill="linkColor"
      />
      <path
        d="M23.6999 28.76H3.29988C1.56588 28.76 0.239883 27.434 0.239883 25.7V5.29999C0.239883 3.56599 1.56588 2.23999 3.29988 2.23999H14.5199V4.27999H3.29988C2.68788 4.27999 2.27988 4.68799 2.27988 5.29999V25.7C2.27988 26.312 2.68788 26.72 3.29988 26.72H23.6999C24.3119 26.72 24.7199 26.312 24.7199 25.7V14.48H26.7599V25.7C26.7599 27.434 25.4339 28.76 23.6999 28.76Z"
        :fill="linkColor"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: ''
    },
    linkColor: {
      type: String,
      default: '#EA5949'
    },
    hoverColor: {
      type: String,
      default: '#d85c4e'
    },
    linkAddress: {
      type: String,
      require: true
    }
  },

  watch: {
    linkColor(color) {
      for (let path of this.$refs.svgExtLink.getElementsByTagName('path')) {
        path.style.fill = color
      }
    }
  },

  methods: {
    onMouseOver() {
      this.$el.style.color = this.hoverColor
      for (let path of this.$refs.svgExtLink.children) {
        path.style.fill = this.hoverColor
      }
    },
    onMouseOut() {
      this.$el.style.color = this.linkColor
      for (let path of this.$refs.svgExtLink.children) {
        path.style.fill = this.linkColor
      }
    }
  },

  mounted() {
    if (this.linkText.length > 0) {
      this.linkText.length > 0
      this.$refs.svgExtLink.style.marginLeft = document.body.offsetWidth > 330 ? '36px' : "15px"
    }
  },

  computed: {
    textStyle() {
      return {
        color: this.linkColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

a {
  display: flex;
  cursor: pointer;
  font-family: 'Spectral';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 176.9%;
  align-items: center;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    transition: fill 0.3s ease;
  }
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
    path {
      transition: fill 0.3s ease;
    }
    @media screen and (max-width: $smPhoneWidth ) {
      font-size: 5px;
    }
    // margin-left: 36px;
  }
}
</style>