<template>
  <div class="project-container">
    <div class="projects-row">
      <projectItem
        class="project-item"
        v-for="(project, index) in projects"
        :key="index"
        :imgSrc="project.imgSrc"
        :projectLink="project.linkSrc"
      />
    </div>
  </div>
</template>

<script>
import projectItem from './ProjectItem.vue'

export default {
  components: {
    projectItem
  },
  data() {
    return {
      projects: [
        {
          name: 'чай на ти',
          linkSrc: 'https://domhu.ru/',
          imgSrc: '/assets/img/projects/Oriental-way.png'
        },
        {
          name: 'чайное путешествие',
          linkSrc: 'https://teatravel.ru/',
          imgSrc: '/assets/img/projects/tea-travel.png'
        },
        {
          name: 'чайная почта',
          linkSrc: 'https://tea-mail.by/articles/',
          imgSrc: '/assets/img/projects/tea-mail.png'
        },
        {
          name: 'легко & ко',
          linkSrc: 'https://legkotea.ru/',
          imgSrc: '/assets/img/projects/easy-and-co.png'
        },
        {
          name: 'чай на ти',
          linkSrc: 'https://domhu.ru/',
          imgSrc: '/assets/img/projects/Oriental-way.png'
        },
        {
          name: 'чайное путешествие',
          linkSrc: 'https://teatravel.ru/',
          imgSrc: '/assets/img/projects/tea-travel.png'
        },
        {
          name: 'чайная почта',
          linkSrc: 'https://tea-mail.by/articles/',
          imgSrc: '/assets/img/projects/tea-mail.png'
        },
        {
          name: 'легко & ко',
          linkSrc: 'https://legkotea.ru/',
          imgSrc: '/assets/img/projects/easy-and-co.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.project-container {
  width: 100%;
  position: relative;
  .projects-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    margin: -22px -40px;

    @media screen and (max-width: $desktopLgWidth) {
      margin: -25px -28px;
    }
    @media screen and (max-width: $desktopWidth) {
      margin: -22px -53px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      margin: -21px -5.2%;
    }

    @media screen and (max-width: $phoneWidth) {
      margin: -15px -19px;
    }

    .project-item {
      position: relative;
      margin: 22px 40px;
      width: calc(100% / 10 * 2 - 80px);

      @media screen and (max-width: $desktopLgWidth) {
        width: calc(100% / 10 * 2 - 56px);
        margin: 25px 28px;
      }
      @media screen and (max-width: $desktopWidth) {
        width: calc(100% / 10 * 2 - 106px);
        margin: 22px 53px;
      }
      @media screen and (max-width: $smDesktopWidth) {
        width: calc(100% / 10 * 2 - 10.4%);
        margin: 21px 5.2%;
      }

      @media screen and (max-width: $phoneWidth) {
        width: calc(100% / 12 * 3 - 38px);        
        margin: 15px 19px;
      }
    }
  }
}
</style>