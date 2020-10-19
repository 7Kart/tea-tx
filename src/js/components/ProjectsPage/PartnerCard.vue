<template>
  <a :href="linkPath" target="_blank">
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
            <external-link linkColor="#fff" hoverColor="#E7E7E7" />
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

.partner-card-wrapper {
  .card-info {
    display: flex;
    color: white;
    justify-content: space-between;
    border-bottom: 2px solid white;
    padding: 12px 0;
    div {
      p {
        font-family: Spectral;
        font-style: normal;
        font-weight: 600;
        &.domain-name {
          text-decoration: underline;
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