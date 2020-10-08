<template>
  <section>
    <container>
      <div>
        <router-link to="/">ГЛАВНАЯ</router-link>
        <menuButton @menuToggle="omMenuToggle" />
      </div>
      <h2>Наш Опыт</h2>
      <p>
        Жизнь в чае привела нас к жизни в Китае. Теперь, оглядываясь назад,
        можно увидеть как путь вел нас в эту. Жизнь в чае привела нас к жизни в
        Китае. Теперь, оглядываясь назад, можно увидеть как путь вел нас в эту
      </p>
    </container>
  </section>
</template>

<script>
import container from '../system/Container.vue'
import menuButton from '../system/menuButton.vue'

export default {
  components: {
    container,
    menuButton
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
  background-color: $background-color;
  height: 100vh;
}
</style>