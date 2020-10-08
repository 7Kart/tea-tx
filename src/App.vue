<template>
  <div id="app">
    <div>
      <header>
        <main-menu v-show="isOpenMenu" @menuToggle="onMenuToggle" />
      </header>
    </div>
    <transition name="page-anim">
      <router-view @menuToggle="onMenuToggle"></router-view>
    </transition>
  </div>
</template>

<script>
import mainMenu from './js/components/system/menu.vue'

export default {
  name: 'app',
  components: {
    mainMenu
  },

  data() {
    return {
      isOpenMenu: false
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isOpenMenu = false
      next()
    })
  },
  methods: {
    onMenuToggle() {
      this.isOpenMenu = !this.isOpenMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.page-anim-enter-active {
  animation: coming .4s;
  animation-delay: 0.3s;
  opacity: 0;
}

.page-anim-leave-active {
  animation: going .5s;
}

@keyframes going {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(100vw);
    opacity: 0;
  }
}


@keyframes coming {
  from{
    transform: translateX(-100vw);
    opacity: 0;
  
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>