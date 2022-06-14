<template>
  <div>
    <v-app-bar
      app
      :style="{
        padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '',
      }"
      elevation = "0"
    >
    <v-toolbar-title class="ml-4  display-2">
      <nuxt-link 
        to="/"
        v-text="title"
        class="main-title-font"
        />
    </v-toolbar-title>
    <v-spacer></v-spacer>
      <div v-if="isAuthenticated">
          <div v-if="adminCheck == 'admin'">
              <nuxt-link 
                  to="/applications"
                  v-text="applications"
                  class="link-font mr-5"
                />
                <nuxt-link 
                  to="/managers"
                  v-text="managers"
                  class="link-font"
                />
         </div>
         <div v-else-if="managerCheck == 'manager'">
            <nuxt-link 
              to="/applications"
              v-text="applications"
              class="link-font"
            />
         </div>
        </div>
        <v-divider vertical class="mx-md-5 mx-2"></v-divider>
        <div v-if="isAuthenticated">
          <v-btn 
            @click.prevent="logout"
            depressed
            small
          >
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </div>
      <div v-if="!isAuthenticated">
        <div>
          <v-btn 
            depressed
            to="/register"
            color="black"
            class="white--text mr-1"
            small
            
          >
            Register
            <v-icon right>mdi-account-plus</v-icon>
          </v-btn>
          <v-btn
            depressed
            to="/login"
            small
          >
            Login
            <v-icon right>mdi-lock-open</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {  },
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "adminCheck", "managerCheck"])
  },
  data () {
    return {
      title: 'Application',
      messages: 0,
      applications: 'Заявки',
      managers: 'Менеджеры',
      linksForAdmin: [
        { title: 'Заявки', path: '/applications' },
        { title: 'Менеджеры', path: '/managers' },
      ],
      linksForManager: [
        { title: 'Заявки', path: '/applications' },
      ],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push("/login");
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Joan&family=Montserrat:wght@300&family=Redressed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
  a {
    text-decoration: none;
    color: black;
  }

   .link-font {
    font-family: 'Montserrat', sans-serif;
  }

  .main-title-font {
    font-family: 'Cinzel', serif;
  }
</style>