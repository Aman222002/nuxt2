
   <template>
    <nav class="nav">
      <nuxt-link to="/">
        <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px;">
          Home
        </v-btn>
      </nuxt-link>
          
      <nuxt-link v-if="!isLoggedIn.isLoggedIN" to="/login">
        <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px;">
          Login
        </v-btn>
      </nuxt-link>
      
      <nuxt-link to="/about">
        <v-btn style="margin-right: 20px; margin-top: 20px; margin-left: 20px;">
          About
        </v-btn>
      </nuxt-link>
      
      <v-btn v-if="isLoggedIn.isLoggedIN"
        style="margin-right: 20px; margin-top: 20px; margin-left: 20px; float: right;"
        color="red"
        @click="logout"
      >
        Logout
      </v-btn>
    </nav>
  </template>
  <script setup>
  import  {useFiltersStore} from '../stores/auth'
  import { useRouter } from 'vue-router';
 
  
   const isLoggedIn=useFiltersStore();
   const router = useRouter();
  //  const { signOut} = useAuth();
   async function logout(){
    try{
      isLoggedIn. isLoggedOut();
      await  
      router.push('/login');
    }catch(err)
    {
      console.log(err)
    }
   }
    
  </script>
  
  <style>
  .nav {
    background-color: rgb(67, 140, 140);
    height: 100px;
    justify-content: space-between;
  }
  </style>

  