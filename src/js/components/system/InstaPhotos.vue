<template>
  <div class="insta-image-container">
    <div v-if="instaImg.length > 0" class="insta-wrapper">
      <insta-photo
        class="circle-inform-block"
        id="insta-photo-1"
        :instaSrc="instaImg[0].imgRes[1]"
      />
      <insta-photo
        class="circle-inform-block"
        id="insta-photo-2"
        :instaSrc="instaImg[1].imgRes[1]"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-1"
        textContent="работа с крупными брендами"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-3"
        headerContent="15"
        textContent="лет работаем в китае"
      />
      <infoCicle
        class="circle-inform-block"
        id="text-info-2"
        headerContent="24/7"
        textContent="на связи с клиентами"
      />
      <insta-photo id="insta-photo-3" :instaSrc="instaImg[2].imgRes[1]" />
      <insta-photo id="insta-photo-4" :instaSrc="instaImg[3].imgRes[1]" />
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
      instaImg: []
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
      console.log(`this.instaImg`, this.instaImg)
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
    margin-top: 14px;
  }
  @media screen and (max-width: $phoneWidth) {
    margin-top: 38px;
  }
  .insta-wrapper {
    display: flex;
    flex-wrap: wrap;
    #insta-photo-1 {
      width: 380px;
      height: 380px;

      @media screen and (max-width: $desktopLgWidth) {
        width: 242px;
        height: 242px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 240px;
        height: 240px;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 155px;
        height: 155px;
      }
    }

    #insta-photo-2 {
      width: 268px;
      height: 268px;
      @media screen and (max-width: $desktopLgWidth) {
        width: 208px;
        height: 208px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 203px;
        height: 203px;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 172px;
        height: 172px;
      }
    }

    #insta-photo-3 {
      width: 267px;
      height: 267px;
      @media screen and (max-width: $desktopLgWidth) {
        width: 198px;
        height: 198px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 195px;
        height: 195px;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 165px;
        height: 165px;
      }
    }

    #insta-photo-4 {
      width: 321px;
      height: 321px;
      @media screen and (max-width: $desktopLgWidth) {
        width: 245px;
        height: 245px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 236px;
        height: 236px;
      }

      @media screen and (max-width: $phoneWidth) {
        width: 184px;
        height: 184px;
      }
    }

    #text-info-1 {
      width: 281px;
      height: 281px;
      background-color: #fff;
      @media screen and (max-width: $desktopLgWidth) {
        width: 216px;
        height: 216px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 216px;
        height: 216px;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 211px;
        height: 211px;
      }
      @media screen and (max-width: $phoneWidth) {
        width: 157px;
        height: 157px;
      }
    }

    #text-info-2 {
      background-color: transparent;
      border: 2px solid #fff;
      width: 224px;
      height: 224px;
      @media screen and (max-width: $desktopLgWidth) {
        width: 177px;
        height: 177px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 177px;
        height: 177px;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 167px;
        height: 167px;
      }
      @media screen and (max-width: $phoneWidth) {
        width: 155px;
        height: 155px;
      }
    }

    #text-info-3 {
      background-color: transparent;
      border: 2px solid #ea5949;
      width: 380px;
      height: 380px;
      @media screen and (max-width: $desktopLgWidth) {
        width: 284px;
        height: 284px;
      }

      @media screen and (max-width: $desktopWidth) {
        width: 284px;
        height: 284px;
      }

      @media screen and (max-width: $smDesktopWidth) {
        width: 283px;
        height: 283px;
      }
      @media screen and (max-width: $phoneWidth) {
        width: 197px;
        height: 197px;
      }
    }
  }
}
</style>