<template>
  <section class="project-section">
    <container>
      <div class="projects-container">
        <div class="project-text-container">
          <h2>Партнеры</h2>
          <p class="default-text">
            Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь назад,
            можно увидеть как путь вел нас в эту. Жизнь в чае привела нас к
            жизни в Китае. Теперь, оглядываясь назад, можно увидеть как путь вел
            нас в эту
          </p>
          <!-- <partnersList /> -->
          <partnersSlider :partners="partners" />
        </div>
        <div class="project-img-container">
          <img src="/assets/img/man.png" alt="" />
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import container from '../system/Container.vue'
import partnersSlider from '../ProjectsPage/PartnerSlide.vue'
// import partnersList from './PartnersList.vue'
export default {
  components: {
    container,
    partnersSlider
    // partnersList
  },
  data() {
    return {
      partners: [
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

section {
  background-color: #ced7cc;
  position: relative;
  z-index: 30;
  border-bottom: 2px solid #1a5a38;
  .projects-container {
    display: flex;
    margin: 164px 0 164px 0;
    justify-content: space-between;
    @media screen and (max-width: $desktopLgWidth) {
      margin: 152px 0 152px 0;
    }
    @media screen and (max-width: $desktopWidth) {
      margin: 142px 0 142px 0;
    }
    @media screen and (max-width: $smDesktopWidth) {
      margin: 80px 0 80px 0;
    }

    @media screen and (max-width: $phoneWidth) {
      margin: 90px 0 90px 0;
    }
    .project-text-container {
      width: 59.4%;
      @media screen and (max-width: $desktopWidth) {
        width: 100%;
      }
      h2 {
        color: #1a5a38;
      }

      p {
        color: #404040;
        padding: 9.5% 0 6.5% 0;
        @media screen and (max-width: $desktopLgWidth) {
          padding: 9.9% 0 8.2% 0;
        }
        
        @media screen and (max-width: $desktopWidth) {
          padding: 4.8% 0 6.4% 0;
        }

        @media screen and (max-width: $smDesktopWidth) {
          padding: 5.6% 0 8.9% 0;
        }

        @media screen and (max-width: $phoneWidth) {
          padding: 42px 0 42px 0;
        }
      }
    }
    .project-img-container {
      width: 32.2%;
      @media screen and (max-width: $desktopWidth) {
        display: none;
      }
    }
  }
}
</style>