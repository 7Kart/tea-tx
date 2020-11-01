<template>
  <a
    class="card"
    :href="linkPath"
    target="_blank"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <div class="partner-card-wrapper">
      <div class="parner-card-container">
        <div class="card-img-container">
          <img :src="imgSrc" />
        </div>
        <div class="card-info">
          <div>
            <p class="domain-name">{{ domainName }}</p>
            <p>{{ description }}</p>
          </div>
          <div>
            <external-link
              class="external-link"
              :linkColor="externalFillColor"
              hoverColor="#E7E7E7"
            />
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import externalLink from '../svg/ExternalLink.vue'

export default {
  components: {
    externalLink
  },
  data() {
    return {
      externalFillColor: '#FFF'
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', () => {
      this.onResize()
    })
  },
  methods: {
    onResize() {
      if (document.body.offsetWidth <= 480)
        this.$el.classList.remove('card-hover')
      else this.$el.classList.add('card-hover')
    },
    onMouseOver() {
      this.externalFillColor = '#EA5949'
    },
    onMouseOut() {
      this.externalFillColor = '#FFF'
    }
  },
  props: {
    imgSrc: {
      type: String
    },
    domainName: {
      type: String
    },
    linkPath: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.card {
  &.card-hover {
    .domain-name {
      transition: color 0.3s ease;
    }
    &:hover .domain-name {
      color: #ea5949;
      transition: color 0.3s ease;
    }
  }
}

.partner-card-wrapper {
  .card-img-container {
    img {
      width: 100%;
    }
  }
  .card-info {
    display: flex;
    color: white;
    justify-content: space-between;
    border-bottom: 2px solid white;
    padding: 12px 0;
    div {
      p {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 600;
        &.domain-name {
          font-weight: bold;
          text-decoration: underline;
          color: #d4d7cc;
          font-size: 26px;
          line-height: 176.9%;
          @media screen and (max-width: $desktopLgWidth) {
            font-size: 22px;
          }

          @media screen and (max-width: $desktopWidth) {
            font-size: 24px;
          }

          @media screen and (max-width: $smDesktopWidth) {
            font-size: 22px;
          }
          @media screen and (max-width: $phoneWidth) {
            font-size: 22px;
          }
        }
        &:nth-child(2) {
          font-size: 21px;
          line-height: 165%;

          @media screen and (max-width: $desktopLgWidth) {
            font-size: 18px;
            line-height: 156%;
          }

          @media screen and (max-width: $desktopWidth) {
            font-size: 21px;
            line-height: 165%;
          }

          @media screen and (max-width: $smDesktopWidth) {
            font-size: 18px;
            line-height: 156%;
          }
        }
      }
      &:nth-child(2) {
        margin: auto 0;
      }
    }
  }
}
</style>