<template>
  <section>
    <container>
      <navPanel
        colorButton="#fff"
        linkUrl="/"
        link-text="главная"
        @menuToggle="omMenuToggle"
      />
      <div class="desktop-wrapper">
        <div class="project-list-header">
          <h2>Наши проекты</h2>
        </div>
        <div class="project-list-container">
          <projectCard
            class="partner-card"
            v-for="(partner, index) in partners"
            :key="index"
            :domainName="partner.domainName"
            :description="partner.description"
            :linkPath="partner.linkPath"
            :imgSrc="partner.imgSrc"
          />
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import navPanel from '../system/NavigationPanel.vue'
import container from '../system/Container.vue'
import projectCard from './PartnerCard.vue'
export default {
  components: {
    navPanel,
    container,
    projectCard
  },
  data() {
    return {
      partners: [
        {
          imgSrc: '/assets/img/mintcom.png',
          domainName: 'мята.com',
          description: 'Проект о матча чае',
          linkPath: 'https://xn--80axta9d.com/'
        },
        {
          imgSrc: '/assets/img/rutea.png',
          domainName: 'ru.tea.community',
          description: 'Чайное комьюнити',
          linkPath: 'https://ru.tea.community/'
        },
        {
          imgSrc: '/assets/img/teamotea.png',
          domainName: 'teamotea.shop',
          description: 'Магазин лучшего чая',
          linkPath: 'https://ru.tea.community/'
        },
        {
          imgSrc: '/assets/img/teavideo.png',
          domainName: 'tea.video',
          description: 'Видеоблог о чае',
          linkPath: 'https://tea.video/'
        },
        {
          imgSrc: '/assets/img/teaschoole.png',
          domainName: 'чайнаяшкола.рф',
          description: 'Чайная школа',
          linkPath: 'http://xn--80aaa8agglk9eo0f.xn--p1ai/'
        },
        {
          imgSrc: '/assets/img/teamoteablog.png',
          domainName: 'teamotea.com',
          description: 'Проект о матча чае',
          linkPath: 'https://teamotea.com/'
        }
      ]
    }
  },
  methods: {
    omMenuToggle() {
      this.$emit('menuToggle')
    }
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

  .desktop-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 6% 0;
    @media screen and (max-width: $desktopWidth) {
      flex-direction: column;
    }

    .project-list-header {
      width: 32.2%;
      @media screen and (max-width: $desktopLgWidth) {
        width: 31.9%;
      }
      @media screen and (max-width: $desktopWidth) {
        width: 100%;
      }
    }
    .project-list-container {
      width: 59.3%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      perspective: 500px;
      transform-style: preserve-3d;
      @media screen and (max-width: $desktopLgWidth) {
        width: 59.2%;
      }
      @media screen and (max-width: $desktopWidth) {
        width: 100%;
      }
      .partner-card {
        width: 45%;
        margin-bottom: 2.9%;
        &:nth-last-child(-n+2){
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>