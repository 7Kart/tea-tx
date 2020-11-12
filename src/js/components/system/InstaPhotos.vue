<template>
  <div class="insta-image-container">
    <div v-if="instaImg.length > 0" class="insta-wrapper">
      <insta-photo
        class="circle-inform-block"
        id="insta-photo-1"
        :instaSrc="instaImg[0].imgRes[2]"
      />
      <insta-photo
        class="circle-inform-block"
        id="insta-photo-2"
        :instaSrc="instaImg[1].imgRes[2]"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-1"
        textContent="работа с крупными брендами"
        fontClass="middle-circle"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-3"
        headerContent="15"
        textContent="лет работаем в китае"
        fontClass="big-circle"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-2"
        headerContent="24/7"
        textContent="на связи с клиентами"
        fontClass="small-circle"
      />
      <insta-photo id="insta-photo-3" :instaSrc="instaImg[2].imgRes[2]" />
      <insta-photo id="insta-photo-4" :instaSrc="instaImg[3].imgRes[2]" />
    </div>
  </div>
</template>

<script>
import instaPhoto from '../UI/instaPhoto.vue'
import infoCicle from '../UI/textInfoCicle.vue'
import axios from 'axios'

export default {
  components: {
    instaPhoto,
    infoCicle
  },

  data() {
    return {
      instaImg: [],
      windowWidth:
        document.documentElement.clientWidth || document.body.clientWidth
    }
  },

  created() {
    axios.get('https://www.instagram.com/tea_tx/?__a=1').then(result => {
      const media = result.data.graphql.user.edge_owner_to_timeline_media.edges
      this.instaImg = media.slice(0, 4).map((el, index) => {
        return {
          imgRes: el.node.thumbnail_resources.map(res => {
            return res.src
          })
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';
.insta-image-container {
  margin-top: 84px;
  @media screen and (max-width: $desktopLgWidth) {
    margin-top: 96px;
  }

  @media screen and (max-width: $desktopWidth) {
    margin-top: 73px;
  }

  @media screen and (max-width: $smDesktopWidth) {
    margin-top: 50px;
  }
  @media screen and (max-width: $phoneWidth) {
    margin-top: 38px;
  }
  .insta-wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 88%;
    align-items: center;
    @media screen and (max-width: $desktopLgWidth) {
      width: 86%;
    }
    @media screen and (max-width: $desktopWidth) {
      width: 100%;
    }
    @media screen and (max-width: $smDesktopWidth) {
      width: 88.2%;
    }

    @media screen and (max-width: $phoneWidth) {
      width: 88.2%;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
    }

    margin: auto;
    .circle-inform-block {
      font-family: 'Spectral';
      font-weight: 500;
      line-height: 100%;
    }

    #insta-photo-1 {
      width: 19%;
      height: 19%;
      order: 1;
      margin-right: 8.7%;
      @media screen and (max-width: $desktopLgWidth) {
        width: 20%;
        height: 20%;
        margin-right: 7%;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 20.2%;
        height: 20.2%;
        margin-right: 7.2%;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 26.9%;
        height: 26.9%;
        margin-right: 12.3%;
      }

      @media screen and (max-width: $phoneWidth) {
        order: 5;
        width: 41.6%;
        height: 41.6%;
        margin: -20% 50% 0 0;
      }
    }

    #insta-photo-2 {
      width: 15.7%;
      height: 15.7%;
      order: 5;
      margin: 0 17.3% 0 12.5%;
      @media screen and (max-width: $desktopLgWidth) {
        margin: 0 15.5% 0 10.3%;
        width: 17.1%;
        height: 17.1%;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 17%;
        height: 17%;
        margin: 0 18.3% 0 9.5%;
      }

      @media screen and (max-width: $smDesktopWidth) {
        order: 6;
        width: 22.7%;
        height: 22.7%;
        margin: 0 17.4% 0 9%;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 41.6%;
        height: 41.6%;
        margin: -10% 0 0 30%;
      }
    }

    #insta-photo-3 {
      width: 18.8%;
      height: 18.8%;
      order: 4;
      margin: 70px 0 0 0;
      @media screen and (max-width: $desktopLgWidth) {
        margin: 41px 0 0 0;
        width: 19.2%;
        height: 19.2%;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 19.7%;
        height: 19.7%;
      }

      @media screen and (max-width: $smDesktopWidth) {
        order: 3;
        width: 24.2%;
        height: 24.2%;
        margin: -68px 0 0 0;
      }

      @media screen and (max-width: $phoneWidth) {
        order: 2;
        width: 47.3%;
        height: 47.3%;
        margin: 2px 0 0 50%;
      }
    }

    #insta-photo-4 {
      order: 7;
      width: 15.7%;
      height: 15.7%;
      @media screen and (max-width: $desktopLgWidth) {
        width: 16.3%;
        height: 16.3%;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 16.5%;
        height: 16.5%;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 21.8%;
        height: 21.8%;
      }

      @media screen and (max-width: $phoneWidth) {
        display: none;
        width: 184px;
        height: 184px;
      }
    }

    #text-info-1 {
      width: 16.5%;
      background-color: #fff;
      order: 2;
      margin: 100px 6.8% 0 0;
      text-align: center;
      color: #47645f;
      font-size: 36px;
      line-height: 100%;
      @media screen and (max-width: $desktopLgWidth) {
        width: 17.8%;
        font-size: 26px;
        margin: 35px 6.7% 0 0;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 18.3%;
        margin: 35px 6.9% 0 0;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 23.6%;
        margin: 0 7.2% 0 29.3%;
        font-size: 27px;
        order: 4;
      }
      @media screen and (max-width: $phoneWidth) {
        width: 42.2%;
        height: 42.2%;
        margin: 9px 0 0 45%;

        font-size: 16.7066px;
      }
    }

    #text-info-2 {
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      width: 13%;
      order: 6;
      margin: -60px 7.6% 0 0;
      @media screen and (max-width: $desktopLgWidth) {
        width: 14.5%;
        margin: -39px 8.3% 0 0;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 14.8%;
        margin: -23px 7.8% 0 0;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 18.7%;
        height: 18.7%;
        order: 2;
        margin: 0 16.7% 0 0;
      }
      @media screen and (max-width: $phoneWidth) {
        width: 41.6%;
        height: 41.6%;
        margin: -32% 44.3% 0 0;
        order: 3;
      }
    }

    #text-info-3 {
      background-color: transparent;
      border: 2px solid #ea5949;
      color: #ea5949;
      font-size: 36px;
      width: 22.3%;
      order: 3;
      margin: -50px 7.6% 0 0;
      h3 {
        color: red !important;
      }
      @media screen and (max-width: $desktopLgWidth) {
        width: 23.4%;
        margin: -65px 5.6% 0 0;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 23.8%;
        margin: -36px 3.7% 0 0;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 31.7%;
        height: 31.7%;
        margin: -20px 0 0 0;
        order: 5;
      }
      @media screen and (max-width: $phoneWidth) {
        order: 1;
        width: 52.9%;
        height: 52.9%;
        margin: 0 0 0 0;
      }
      .circle-header {
        font-size: 102px;
        line-height: 165.9%;
      }
    }
  }
}
</style>