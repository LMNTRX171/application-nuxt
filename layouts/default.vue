<template>
  <v-app :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}">
    <Nav />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from '~/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>
