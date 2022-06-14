<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-card-title>
        Создать менеджера
    </v-card-title>
    <v-form
      ref="form"
      class="mr-5 ml-5"
    >
      <v-text-field 
        label="ФИО"
        v-model="managerInfo.name"
      >
      </v-text-field>
    </v-form>

    <v-card-actions>
      <v-btn
        class="ma-2"
        outlined
        @click.prevent="createNewManager"
      >
        Создать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        managerInfo: {
            name: ''
        }
    }),
    methods: {
    async createNewManager() {
      try {
        const response = await axios.post('http://localhost:1337/managers', this.managerInfo)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    },
    },
}
</script>

<style>

</style>