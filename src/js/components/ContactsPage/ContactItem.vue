<template>
  <div class="contact-item-container">
    <h4>{{ contactType }}</h4>
    <a :href="typiedLink" class="default-text">{{ contactValue }}</a>
  </div>
</template>

<script>
export default {
  props: {
    contactType: {
      type: String
    },
    contactValue: {
      type: String
    },
    metaType:{
      type:String,
      default:""
    }
  },
  computed:{
    typiedLink(){
      console.log('this.metaType', this.metaType);
      if(this.metaType && this.metaType.length > 0){
        return `${this.metaType}:${this.contactValue}`;
      }else{
        return this.contactType;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.contact-item-container {
  font-family: 'Spectral';
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 136%;
    color: #ffffff;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 32px;
      margin-bottom: 12px;
    }
    @media screen and (max-width: $desktopWidth) {
      margin-bottom: 8px;
    }
    @media screen and (max-width: $smDesktopWidth) {
      font-size: 28px;
    }

    @media screen and (max-width: $phoneWidth) {
      font-size: 26px;
    }
  }
  a {
    font-weight: bold;
    font-size: 26px;
    line-height: 176.9%;
    text-decoration-line: underline;
    color: #ee5b5b;
    cursor: pointer;
    transition: color 0.3s ease;
    @media screen and (max-width: $desktopLgWidth) {
      font-size: 22px;
    }
    @media screen and (max-width: $desktopWidth) {
      font-size: 24px;
    }
    &:hover {
      transition: color 0.3s ease;
      color: #d85c4e;
    }
  }
}
</style>