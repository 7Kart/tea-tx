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
          <h2>Наши <br />проекты</h2>
        </div>
        <div v-if="!isMobile" class="project-list-container">
          <projectCard
            class="partner-card"
            v-for="(project, index) in projects"
            :key="index"
            :domainName="project.domainName"
            :description="project.description"
            :linkPath="project.linkPath"
            :imgSrc="project.imgSrc"
          />
        </div>
      </div>
    </container>
    <projectSlider :isMobileFlag="isMobile" :projectsArr="projects" />
  </section>
</template>

<script>
import navPanel from '../system/NavigationPanel.vue'
import container from '../system/Container.vue'
import projectCard from './ProjectCard.vue'
import projectSlider from './ProjectSlider.vue'

export default {
  components: {
    navPanel,
    container,
    projectCard,
    projectSlider
  },
  data() {
    return {
      isMobile: false,
      projects: [
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
  mounted() {
    this.isMobile = this.detectMobileWidth()
    window.addEventListener('resize', () => {
      this.isMobile = this.detectMobileWidth()
    })
  },
  methods: {
    detectMobileWidth() {
      return document.body.offsetWidth <= 480
    },
    omMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

section {
  z-index: 30;
  position: relative;
  background: linear-gradient(
      70.77deg,
      #1a5a38 1.04%,
      rgba(30, 114, 69, 0.87) 100%
    ),
    #1a5a38;
  @media screen and (max-width: $phoneWidth) {
    min-height: 100vh;
  }
  .desktop-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 164px 0 164px 0;
    @media screen and (max-width: $desktopLgWidth) {
      margin: 149px 0 152px 0;
    }

    @media screen and (max-width: $desktopWidth) {
      margin: 92px 0 142px 0;
      flex-direction: column;
    }

    @media screen and (max-width: $smDesktopWidth) {
      margin: 128px 0 80px 0;
    }

    @media screen and (max-width: $phoneWidth) {
      // margin-top: 90px;
      margin: 90px 0 0 0;
    }
    .project-list-header {
      width: 40%;
      @media screen and (max-width: $desktopWidth) {
        width: 100%;
      }
      h2 {
        color: white;
        padding-top: 61px;
        position: sticky;
        top: 0;
        @media screen and (max-width: $desktopLgWidth) {
          padding-top: 25px;
        }
        @media screen and (max-width: $desktopWidth) {
          padding-top: 0px;
          
          margin-bottom: 80px;
        }

        @media screen and (max-width: $phoneWidth) {
          margin-bottom: 52px;
        }
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
        margin-bottom: 7%;
        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
        @media screen and (max-width: $phoneWidth) {
          width: 100%;
        }
      }
    }
  }
}
</style>