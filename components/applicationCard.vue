<template>
          <v-card
          class="mx-auto mb-7"
          max-width="344"
          outlined
          elevation="7"
          color="blue-grey lighten-2"
        >
            <v-card-title>
              {{application.fullname}}
            </v-card-title>
            <v-card-subtitle class="black--text">
              Город: {{application.city}}
            </v-card-subtitle>
            <v-card-subtitle class="black--text">
              Адрес: {{application.adress}}
            </v-card-subtitle>
                <v-card-subtitle class="black--text">
              Тариф: {{application.tarif}}
            </v-card-subtitle>
                <v-card-subtitle class="black--text">
              Интернет: {{application.internet}}
            </v-card-subtitle>
            <div>
              <select v-model="application.state" class="ml-4">
                    <option v-for="(state, index) in states" :key="index" :value="state.id">
                      {{state.title}}
                    </option>
                </select>
              </div>
              <div>
                <select v-model="application.manager" class="ma-4">
                    <option v-for="(manager, index) in managers" :key="index" :value="manager.id">
                      {{manager.name}}
                    </option>
                </select>
              </div>
              <v-btn
                @click.prevent="handleSubmit(application)"
                class="ma-3 white--text black"
              >
                Назначить
              </v-btn>
          </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>