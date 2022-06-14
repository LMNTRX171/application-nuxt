<template>
  <div class="mt-14">
    <v-row justify="center">
    <v-col
      cols="12"
      sm="4"
    >
      <v-sheet
        min-height="15vh"
        rounded="lg"
        v-for="manager in managers" 
        :key="manager.id"
      >
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
            color="blue-grey lighten-2"
        >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                {{manager.name}}
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-sheet>
    </v-col>

    <v-col
      cols="12"
      sm="8"
    >
      <v-sheet
        rounded="lg"
        min-height="100"
      >
        <createManager />
      </v-sheet>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import createManager from '~/components/createManager'

export default {
    components: {
        createManager
    },
    async fetch({store}) {
      if(store.getters['manager/managers'].length === 0) {
        await store.dispatch('manager/fetch')
      }
    },
    computed: {
      managers() {
        return this.$store.getters['manager/managers']
    }
  }
}
</script>

<style>

</style>