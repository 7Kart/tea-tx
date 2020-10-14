<template>
  <section>
    <div class="insta-page-container">
      <container>
        <h2>На рынке с 2012 года</h2>
      </container>
      <div class="insta-image-container">
        <!-- <insta-photo :instaSrc="instaImg"/> -->
      </div>
    </div>
  </section>
</template>

<script>
import container from '../system/Container.vue'
import instaPhoto from '../UI/instaPhoto.vue'
import axios from 'axios'

export default {
  components: {
    container,
    instaPhoto
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
      console.log(`this.instaImg`, this.instaImg);
          
    })
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
  padding: 164px 0 164px 0;

  @media screen and (max-width: $desktopLgWidth) {
    padding: 152px 0 152px 0;
  }

  @media screen and (max-width: $desktopWidth) {
    padding: 116px 0 80px 0;
  }

  @media screen and (max-width: $smDesktopWidth) {
    padding: 104px 0 80px 0;
  }

  @media screen and (max-width: $phoneWidth) {
    padding: 90px 0 80px 0;
  }

  h2 {
    font-family: 'Spectral';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 100%;
    color: #ffffff;

    @media screen and (max-width: $desktopLgWidth) {
      font-size: 56px;
      line-height: 100%;
    }

    @media screen and (max-width: $smDesktopWidth) {
      font-size: 48px;
      line-height: 100%;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 42px;
      line-height: 100%;
    }
  }
}
</style>