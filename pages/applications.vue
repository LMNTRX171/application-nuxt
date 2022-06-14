<template>
<div>
  <div class="mb-10">
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <select class="ma-4 selectBorder" v-model="filter.manager">
          <option value="">
            Не выбрано
          </option>
          <option v-for="(manager, index) in managers" :key="index" :value="manager.id">
            {{manager.name}}
          </option>
        </select>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-checkbox
          v-model="filter.statuses[1]"
          class="ml-4"
          label="Новая"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="filter.statuses[2]"
          class="ml-4"
          label="В работе"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="filter.statuses[3]"
          class="ml-4"
          label="Обработано"
          color="primary"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        >
        <div class=" main-font">
          <h1 class="text-center mb-8 ">Новая</h1>
        </div>
        <v-sheet
        min-height="15vh"
        rounded="lg"
        v-for="application in applications" 
        :key="application.id"
      >
      <div v-if="filter.statuses[application.state] == true && (application.manager == filter.manager || filter.manager == '') && application.state == 1">
        <v-card
          class="mx-auto mb-10 mr-2"
          max-width="344"
          outlined
          elevation="7"
          
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
              <select v-model="application.state" class="ml-4 selectBorder">
                    <option v-for="(state, index) in states" :key="index" :value="state.id">
                      {{state.title}}
                    </option>
                </select>
              </div>
              <div>
                <select v-model="application.manager" class="ma-4 selectBorder">
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
          </div>
         </v-sheet>
        </v-col>
        <v-col
        cols="12"
        sm="4"
        class="cardBorder"
        >
        
        <h1 class="text-center mb-8 main-font">В работе</h1>
        <v-sheet
        min-height="15vh"
        rounded="lg"
        v-for="application in applications" 
        :key="application.id" 
      >
      <div v-if="filter.statuses[application.state] == true && (application.manager == filter.manager || filter.manager == '') && application.state == 2">
        <v-card
          class="mx-auto mb-10"
          max-width="344"
          outlined
          elevation="7"
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
              <select v-model="application.state" class="ml-4 selectBorder">
                    <option v-for="(state, index) in states" :key="index" :value="state.id">
                      {{state.title}}
                    </option>
                </select>
              </div>
              <div>
                <select v-model="application.manager" class="ma-4 selectBorder">
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
          </div>
         </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="cardBorder"
        >
        <h1 class="text-center mb-8 main-font">Обработано</h1>
        <v-sheet
          min-height="15vh"
          rounded="lg"
          v-for="application in applications" 
          :key="application.id" 
      >
      <div v-if="filter.statuses[application.state] == true && (application.manager == filter.manager || filter.manager == '') && application.state == 3">
        <v-card
          class="mx-auto mb-10"
          max-width="350"
          outlined
          elevation="7"
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
              <select v-model="application.state" class="ml-4 selectBorder">
                    <option v-for="(state, index) in states" :key="index" :value="state.id">
                      {{state.title}}
                    </option>
                </select>
              </div>
              <div>
                <select v-model="application.manager" class="ma-4 selectBorder">
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
          </div>
         </v-sheet>
        </v-col>
      </v-row>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        applications: [],
        managers: [],
        request: 'http://localhost:1337/applications/',
        states: [
          {
            title: 'Новая',
            id: 1
          },
          {
            title: 'В работе',
            id: 2
          },
          {
            title: 'Обработано',
            id: 3
          }
        ],
        filter: { 
          manager: '', 
          statuses: {1: true, 2: true, 3: false}
        }
    }),
    async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/applications')
      this.applications = response.data
      console.log(response.data);
    } catch (error) {
      this.error = error;
    }
  },
  async created() {
      try {
      const response = await axios.get('http://localhost:1337/managers')
      this.managers = response.data
      console.log(response.data);
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    async handleSubmit(application) {
      let newRequest = application.id
      console.log(newRequest);
      try {
        const response = await axios.put(this.request + String(newRequest), {
           manager: application.manager,
           state: application.state
           
        })
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

  .cardBorder {
    border-left: 1px solid grey
  }

  .col:first-child{
  border: none;
  }

  .selectBorder {
    border: 1px solid black;
    padding: 2px;
    padding-left: 5px
  }

  .main-font {
   font-family: 'Bree Serif', serif;
  }
</style>