<template>
<div class="d-flex justify-center align-center">
<v-col cols="10" lg="4" class="mx-auto">
  <v-card
    elevation="8"
    outlined
  >
    <div class="text-center">
      <h2 class="black--text main-title-font mt-4">Форма Заявок</h2>
        <v-form
        ref="form"
        >
        <v-card-text>
      <v-text-field 
      label="ФИО"
      v-model="modifiedData.fullname"
      :counter="30"
      required
      :rules="nameRules"
      >
      </v-text-field>

      <v-text-field
        label="Город"
        v-model="modifiedData.city"
        :rules="cityRules"
        :counter="15"
        required
      >
        
      </v-text-field>
      <v-text-field
        label="Адрес"
        v-model="modifiedData.adress"
        :rules="adressRules"
        :counter="30"
        required
      >
        
      </v-text-field>
        <v-select
          :items="allTarifs"
          v-model="modifiedData.tarif"
          label="Тариф"
        ></v-select>
        <v-select
          :items="InternetChoice"
          v-model="modifiedData.internet"
          label="Тип соединения"
        ></v-select> 
    </v-card-text>
    <v-card-actions>
        <v-btn
          type="submit"
          block
          @click.prevent="handleSubmit"
          class="black mt-5 mb-5 white--text"
        >
          Отправить заявку
        </v-btn>

      </v-card-actions>
    </v-form>
  </div>
    </v-card>
    </v-col>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      allTarifs: ['Апгрейд', 'Апгрейд с ТВ', 'Технологии развлечения', 'Экспресс 2.0', 
                  'Технологии общения', 'Игровой', 'Комбо Игровой+', 'Технологии выгоды',
                 ],
      // InternetChoice: ['КаспийТелеком', 'R-line', 'KaspNET', 
      // 'Ellco', 'Ростелеком', 'SumTel ', ],
      InternetChoice: ['Кабель', 'Антена'],
      modifiedData: {
        fullname: '',
        city: '',
        adress: '',
        tarif: '',
        internet: ''
      },
      error: null,
      nameRules: [
        v => !!v || 'Заполните поле!',
        v => (v && v.length <= 30) || 'ФИО не должно быть больше 30 символов!',
      ],
      adressRules: [
        v => !!v || 'Заполните поле!',
        v => (v && v.length <= 30) || 'Адрес не должен быть больше 30 символов!',
      ],
      cityRules: [
        v => !!v || 'Заполните поле!',
        v => (v && v.length <= 15) || 'Город не должен быть больше 15 символов!',
      ],
      tarifRules: [
        v => !!v || 'Заполните поле!',
        v => (v && v.length <= 15) || 'Тариф не должен быть больше 15 символов!',
      ],
      internetRules: [
        v => !!v || 'Заполните поле!',
        v => (v && v.length <= 15) || 'Интернет не должен быть больше 15 символов!',
      ],
    }
  },
  methods: {
    handleSubmit: async function(e) {
      try {
        const response = await axios.post('http://localhost:1337/applications', this.modifiedData)
          this.modifiedData.fullname = ''
          this.modifiedData.city = ''
          this.modifiedData.adress = ''
          this.modifiedData.internet = ''
          this.modifiedData.tarif = ''
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Joan&family=Montserrat:wght@300&family=Redressed&display=swap');

   .main-title-font {
    font-family: 'Montserrat', sans-serif;
  }
</style>
