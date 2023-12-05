
<template>
  <nav class="nav">
    <NuxtLink to="/">
      <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px">
        Home
      </v-btn>
    </NuxtLink>

    <NuxtLink to="/login">
      <v-btn
        v-if="!$auth.loggedIn"
        style="margin-right: 20px; margin-top: 20px; margin-left: 20px"
      >
        Login
      </v-btn>
    </NuxtLink>
    <!-- <NuxtLink to="/user"> -->
      <!-- <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px">
        Users
      </v-btn>
    </NuxtLink> -->
    <NuxtLink to="/about">
      <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px">
        About
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/profile">
      <v-btn v-if="$auth.loggedIn"   style="margin-right: 20px; margin-top: 20px; margin-left: 20px">
        Profile
      </v-btn>
    </NuxtLink>
    <v-btn
      v-if="$auth.loggedIn"
      style="
        margin-right: 20px;
        margin-top: 20px;
        margin-left: 20px;
        float: right;
      "
      color="red"
      @click="logout()"
    >
      Logout
    </v-btn>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapGetters({
      checkLogin: 'checkLogin',
    }),
  },
  methods: {
    ...mapActions({ Set_Login: 'Set_Login' }),
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
<style>
.nav {
  background-color: rgb(67, 140, 140);
  height: 100px;
  justify-content: space-between;
}
</style>
  
  
  